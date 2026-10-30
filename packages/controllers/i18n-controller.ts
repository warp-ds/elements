import { i18n } from "@lingui/core";
import type { ReactiveController, ReactiveControllerHost } from "lit";

/** Refreshes localized content when Lingui's active locale changes. */
export class I18nController implements ReactiveController {
	#host: ReactiveControllerHost;
	#unsubscribe?: () => void;
	#locale = i18n.locale;

	constructor(host: ReactiveControllerHost) {
		this.#host = host;
		host.addController(this);
	}

	hostConnected() {
		// A previously rendered host may have missed locale changes while detached.
		this.#refresh();
		this.#unsubscribe = i18n.on("change", () => this.#refresh());
	}

	#refresh() {
		if (i18n.locale === this.#locale) return;
		this.#locale = i18n.locale;
		this.#host.requestUpdate();
	}

	hostDisconnected() {
		this.#unsubscribe?.();
		this.#unsubscribe = undefined;
	}
}
