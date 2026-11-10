const REPEAT_WINDOW_MS = 50;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const css = `
	:host {
		--mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		width: 24rem;
		height: 100vh;
		border-inline-start: 1px solid var(--w-s-color-border);
		background: var(--w-s-color-background-subtle);
		color: var(--w-s-color-text);
		font-size: 0.9375rem;
		line-height: 1.4;
	}
	header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1.25rem 1.25rem 0.25rem;
	}
	h2 {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 700;
	}
	.total {
		min-width: 1.5rem;
		padding: 0 0.375rem;
		border-radius: 999px;
		background: var(--w-s-color-background);
		border: 1px solid var(--w-s-color-border);
		color: var(--w-s-color-text-subtle);
		font-size: 0.75rem;
		font-variant-numeric: tabular-nums;
		text-align: center;
	}
	.hint {
		margin: 0;
		padding: 0 1.25rem 1rem;
		border-bottom: 1px solid var(--w-s-color-border);
		color: var(--w-s-color-text-subtle);
		font-size: 0.8125rem;
	}
	.scroller {
		flex: 1;
		overflow-y: auto;
		padding: 0.75rem;
	}
	ol {
		display: grid;
		gap: 0.375rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		padding: 0.625rem 0.875rem;
		border: 1px solid var(--w-s-color-border);
		border-radius: 8px;
		background: var(--w-s-color-background);
		animation: arrive 600ms ease-out;
		transition: background-color 250ms, border-color 250ms;
	}
	li.repeated {
		border-color: var(--w-s-color-border-warning);
		background: var(--w-s-color-background-warning-subtle);
	}
	@keyframes arrive {
		from {
			border-color: var(--w-s-color-border-primary);
			background: var(--w-s-color-background-primary-subtle);
		}
	}
	.line {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.type {
		font: 700 1rem/1.4 var(--mono);
	}
	.repeat {
		padding: 0 0.5rem;
		border: 1px solid var(--w-s-color-border-warning);
		border-radius: 999px;
		background: var(--w-s-color-background);
		font-size: 0.8125rem;
		font-weight: 700;
		font-variant-numeric: tabular-nums;
	}
	.meta {
		margin-inline-start: auto;
		color: var(--w-s-color-text-subtle);
		font-size: 0.8125rem;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}
	.detail {
		display: block;
		margin-top: 0.125rem;
		color: var(--w-s-color-text-subtle);
		font: 0.875rem/1.4 var(--mono);
		overflow-wrap: anywhere;
	}
	.repeat:empty,
	.detail:empty,
	.empty {
		display: none;
	}
	ol:empty + .empty {
		display: block;
		margin: 2rem 1rem;
		color: var(--w-s-color-text-subtle);
		text-align: center;
	}
	@media (prefers-reduced-motion: reduce) {
		li {
			animation: none;
			transition: none;
		}
	}
`;

function formatDetail(detail) {
	if (detail === null) return "";
	if (typeof detail !== "object" || Array.isArray(detail))
		return JSON.stringify(detail);
	return Object.entries(detail)
		.map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
		.join(", ");
}

const formatTime = (ms) =>
	ms < 1000 ? `${ms} ms` : `${(ms / 1000).toFixed(1)} s`;

export function createEventsPanel() {
	const host = Object.assign(document.createElement("aside"), {
		id: "events-panel",
		inert: true,
	});
	host.setAttribute("aria-hidden", "true");
	const root = host.attachShadow({ mode: "closed" });
	root.innerHTML = `
		<style>${css}</style>
		<header><h2>Events</h2><span class="total">0</span></header>
		<p class="hint">Public events since the last mount. ×2 means the same event fired twice in a row.</p>
		<div class="scroller">
			<ol></ol>
			<p class="empty">Nothing yet. Events show up here as the component fires them.</p>
		</div>`;
	document.body.append(host);
	const total = root.querySelector(".total");
	const scroller = root.querySelector(".scroller");
	const list = root.querySelector("ol");
	let count = 0;
	let last = null;

	function add(event) {
		if (event.insideShadowOf) return;
		total.textContent = ++count;
		const key = JSON.stringify([event.type, event.target, event.detail]);
		if (last?.key === key && event.time - last.time <= REPEAT_WINDOW_MS) {
			last.count++;
			last.time = event.time;
			last.item.classList.add("repeated");
			last.repeat.textContent = `×${last.count}`;
			if (!reducedMotion.matches)
				last.repeat.animate(
					[{ transform: "scale(1.35)" }, { transform: "none" }],
					{ duration: 250, easing: "ease-out" },
				);
			return;
		}
		const item = document.createElement("li");
		item.innerHTML = `<div class="line"><span class="type"></span><span class="repeat"></span><span class="meta"></span></div><code class="detail"></code>`;
		const [type, repeat, meta, detail] = item.querySelectorAll("span, code");
		type.textContent = event.type;
		meta.textContent = `${event.target} · ${formatTime(event.time)}`;
		detail.textContent = formatDetail(event.detail);
		list.append(item);
		scroller.scrollTop = scroller.scrollHeight;
		last = { key, time: event.time, count: 1, item, repeat };
	}

	function reset() {
		list.replaceChildren();
		count = 0;
		total.textContent = count;
		last = null;
	}

	return { add, reset };
}
