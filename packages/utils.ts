import { nanoid } from "nanoid";

export function uniqueId(prefix = "") {
	return `${prefix}${nanoid()}`;
}

type NativeSubmitter = HTMLButtonElement | HTMLInputElement;

export type WarpSubmitContext = {
	initiator: HTMLElement;
	nativeSubmitter: HTMLElement | null;
	defaultSubmitter: HTMLElement | null;
};

const pendingSubmitContexts = new WeakMap<
	HTMLFormElement,
	WarpSubmitContext[]
>();

function getSubmitterType(submitter: HTMLElement): string {
	if (submitter instanceof HTMLButtonElement) {
		return submitter.type || "submit";
	}

	if (submitter instanceof HTMLInputElement) {
		return submitter.type || "text";
	}

	if (submitter.localName === "w-button") {
		return submitter.getAttribute("type") || "button";
	}

	return "";
}

function isSubmitButton(submitter: HTMLElement): boolean {
	const type = getSubmitterType(submitter);

	return (
		!submitter.hasAttribute("disabled") &&
		(submitter instanceof HTMLButtonElement ||
			submitter instanceof HTMLInputElement ||
			submitter.localName === "w-button") &&
		(type === "submit" || type === "image")
	);
}

function isAssociatedWithForm(
	submitter: HTMLElement,
	form: HTMLFormElement,
): boolean {
	const formControl = submitter as HTMLElement & {
		form?: HTMLFormElement | null;
	};

	return formControl.form === form || submitter.closest("form") === form;
}

export function getDefaultSubmitter(
	form: HTMLFormElement,
): HTMLElement | undefined {
	const formDescendants = form.querySelectorAll<HTMLElement>(
		"button,input,w-button",
	);
	const descendantSubmitter = [...formDescendants].find(
		(el) => isSubmitButton(el) && isAssociatedWithForm(el, form),
	);
	if (descendantSubmitter) return descendantSubmitter;

	if (!form.id) return undefined;

	const externalElements = form.ownerDocument.querySelectorAll<HTMLElement>(
		`button[form="${form.id}"],input[form="${form.id}"],w-button[form="${form.id}"]`,
	);
	return [...externalElements].find(
		(el) => isSubmitButton(el) && isAssociatedWithForm(el, form),
	);
}

function getPendingSubmitContext(
	form: HTMLFormElement,
): WarpSubmitContext | undefined {
	return pendingSubmitContexts.get(form)?.at(-1);
}

function decorateSubmitEvent(
	event: SubmitEvent,
	context: WarpSubmitContext,
): void {
	if (event.warpSubmitContext) return;

	context.nativeSubmitter = event.submitter as HTMLElement | null;

	Object.defineProperty(event, "warpSubmitContext", {
		value: context,
		enumerable: false,
		configurable: true,
	});
}

function installSubmitDecorator(
	form: HTMLFormElement,
	signal: AbortSignal,
): void {
	const root = form.getRootNode();
	const eventTarget =
		root instanceof Document || root instanceof ShadowRoot ? root : form;

	eventTarget.addEventListener(
		"submit",
		(event) => {
			if (event.target !== form) return;

			const context = getPendingSubmitContext(form);
			if (!context) return;

			decorateSubmitEvent(event as SubmitEvent, context);
		},
		{ capture: true, signal },
	);
}

function trackSubmitContext(
	form: HTMLFormElement,
	context: WarpSubmitContext,
	callback: () => void,
): void {
	const controller = new AbortController();
	installSubmitDecorator(form, controller.signal);

	const contexts = pendingSubmitContexts.get(form) ?? [];
	contexts.push(context);
	pendingSubmitContexts.set(form, contexts);

	try {
		callback();
	} finally {
		contexts.pop();
		controller.abort();
	}
}

export function requestSubmit(
	form: HTMLFormElement,
	initiator?: HTMLElement,
	submitter?: NativeSubmitter,
): void {
	if (!initiator) {
		if (submitter) {
			form.requestSubmit(submitter);
		} else {
			form.requestSubmit();
		}
		return;
	}

	const context: WarpSubmitContext = {
		initiator,
		nativeSubmitter: submitter ?? null,
		defaultSubmitter: submitter ?? null,
	};

	trackSubmitContext(form, context, () => {
		if (submitter) {
			form.requestSubmit(submitter);
		} else {
			form.requestSubmit();
		}
	});
}

export function requestSubmitWithDefaultSubmitter(
	form: HTMLFormElement,
	initiator: HTMLElement,
): void {
	const defaultSubmitter = getDefaultSubmitter(form);
	const nativeSubmitter =
		defaultSubmitter instanceof HTMLButtonElement ||
		defaultSubmitter instanceof HTMLInputElement
			? defaultSubmitter
			: undefined;

	const context: WarpSubmitContext = {
		initiator,
		nativeSubmitter: nativeSubmitter ?? null,
		defaultSubmitter: defaultSubmitter ?? null,
	};

	trackSubmitContext(form, context, () => {
		if (nativeSubmitter) {
			form.requestSubmit(nativeSubmitter);
		} else {
			form.requestSubmit();
		}
	});
}

declare global {
	interface SubmitEvent {
		readonly warpSubmitContext?: WarpSubmitContext;
	}
}
