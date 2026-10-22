const W_PREFIX = /^w-/;
const mountEl = document.getElementById("mount");
const events = [];
let mountedAt = performance.now();

const describe = (el) =>
	el?.localName ? el.localName + (el.id ? `#${el.id}` : "") : String(el);
const shadowHostOf = (el) => {
	const root = el.getRootNode();
	return root instanceof ShadowRoot ? describe(root.host) : null;
};

function* deepElements(root) {
	for (const el of root.querySelectorAll("*")) {
		yield el;
		if (el.shadowRoot) yield* deepElements(el.shadowRoot);
	}
}

function toJSONSafe(value, depth = 0, seen = new WeakSet()) {
	if (value === null || ["string", "number", "boolean"].includes(typeof value))
		return value;
	if (value === undefined) return null;
	if (typeof value === "function") return "[function]";
	if (typeof value !== "object") return String(value);
	if (value instanceof Node) return `<${describe(value)}>`;
	if (seen.has(value)) return "[circular]";
	if (depth > 4) return "[too deep]";
	seen.add(value);
	if (Array.isArray(value))
		return value.map((v) => toJSONSafe(v, depth + 1, seen));
	const out = {};
	for (const key of Object.keys(value))
		out[key] = toJSONSafe(value[key], depth + 1, seen);
	return out;
}

function serializeWithConsoleMuted(detail) {
	const { warn, log } = console;
	console.warn = console.log = () => {};
	try {
		return toJSONSafe(detail);
	} finally {
		Object.assign(console, { warn, log });
	}
}

// Non-bubbling events and events inside shadow roots never reach a document listener.
const nativeDispatch = EventTarget.prototype.dispatchEvent;
EventTarget.prototype.dispatchEvent = function (event) {
	if (
		event instanceof CustomEvent &&
		this instanceof Element &&
		this.localName.startsWith("w-")
	) {
		events.push({
			type: event.type,
			target: describe(this),
			insideShadowOf: shadowHostOf(this),
			detail: serializeWithConsoleMuted(event.detail),
			time: Math.round(performance.now() - mountedAt),
		});
	}
	return nativeDispatch.call(this, event);
};

const nextFrame = () =>
	new Promise((resolve) => requestAnimationFrame(() => resolve()));

async function settle() {
	for (let i = 0; i < 5; i++) {
		const elements = [...deepElements(mountEl)];
		await Promise.all(elements.map((el) => el.updateComplete).filter(Boolean));
		await nextFrame();
		await nextFrame();
		if (!elements.some((el) => el.isUpdatePending)) return;
	}
}

function inventory() {
	return [...deepElements(mountEl)]
		.filter((el) => el.localName.startsWith("w-"))
		.map((el) => ({
			tag: el.localName,
			insideShadowOf: shadowHostOf(el),
			defined: Boolean(customElements.get(el.localName)),
		}));
}

async function mount(html, options = {}) {
	const extra = (options.with ?? []).map((name) => name.replace(W_PREFIX, ""));
	mountEl.replaceChildren();
	events.length = 0;
	mountedAt = performance.now();
	mountEl.innerHTML = html;

	const tags = [
		...new Set(Array.from(mountEl.querySelectorAll("*"), (el) => el.localName)),
	].filter((tag) => tag.startsWith("w-"));
	const names = [...new Set([...tags.map((tag) => tag.slice(2)), ...extra])];
	const modules = names.map((name) => `/packages/${name}/${name}.ts`);
	const errors = [];
	await Promise.all(
		modules.map((path) =>
			import(/* @vite-ignore */ path).catch((error) => {
				errors.push({ module: path, message: String(error?.message ?? error) });
			}),
		),
	);
	const undefinedTags = [];
	await Promise.all(
		tags.map((tag) =>
			Promise.race([
				customElements.whenDefined(tag),
				new Promise((resolve) => setTimeout(resolve, 5000)),
			]).then(() => {
				if (!customElements.get(tag)) undefinedTags.push(tag);
			}),
		),
	);
	await settle();

	const warnings = [];
	const seen = new Set();
	for (const item of inventory()) {
		const key = `${item.insideShadowOf} ${item.tag}`;
		if (item.defined || !item.insideShadowOf || seen.has(key)) continue;
		seen.add(key);
		warnings.push(
			`<${item.insideShadowOf}> renders <${item.tag}> but nothing imported it, so it stays undefined and renders nothing. ` +
				`That is a missing import in the component. To keep testing, mount again with --with ${item.tag.slice(2)}.`,
		);
	}
	return { tags, modules, errors, undefinedTags, warnings };
}

function focused() {
	const chain = [];
	let el = document.activeElement;
	while (el && el !== document.body) {
		chain.push(el);
		el = el.shadowRoot?.activeElement ?? null;
	}
	if (!chain.length) return null;
	const leaf = chain.at(-1);
	return {
		element: chain.map(describe).join(" > "),
		...(typeof leaf.value === "string" ? { value: leaf.value } : {}),
	};
}

window.playground = {
	brand: window.playgroundBrand,
	styles: await window.playgroundStyles,
	mount,
	settle,
	events: () => events,
	focused,
	inventory,
	serialize: (value) => toJSONSafe(value),
	ready: true,
};
