const windowExists = typeof window !== "undefined";

let prefersMotion = true;

if (windowExists) {
	const query = window.matchMedia("(prefers-reduced-motion: reduce)");
	const callback = ({ matches }) => (prefersMotion = !matches);
	// older browsers don't support the new API, and the old API is deprecated
	if (query.addEventListener) query.addEventListener("change", callback);
	callback(query);
}

const removeTransition = (el) => {
	el.style.transition = null;
	el.style.backfaceVisibility = null;
	el.style.overflow = null;
};

const addTransition = (el) => {
	// we set timing to something insanely short
	// when reducing motion so the after-* hooks still fire
	const timing =
		"var(--w-expansion-duration, var(--f-expansion-duration, 0.3s))";
	el.style.transition = `height ${timing}`;
	el.style.backfaceVisibility = "hidden";
	el.style.overflow = "hidden";
};

const getAfterExpandCallback = (el, done) => () => {
	el.style.height = "auto";
	el.style.overflow = null;
	if (done) done();
};

const getAfterCollapseCallback = (done) => () => {
	if (done) done();
};

/**
 * Transitions an element from 0 to a detected height
 * Will return a Promise when no 'done' callback is provided
 * @type {(el: HTMLElement, done?: function) => void | Promise<void>}
 */
export const expand = (el, done) => {
	const returnPromise = (() => {
		if (!done)
			return new Promise((r) => {
				done = r;
			});
	})();

	if (!prefersMotion) {
		el.style.height = "auto";
		if (done) done();
		return returnPromise;
	}

	const afterExpandCallback = getAfterExpandCallback(el, done);
	removeTransition(el);
	el.style.height = "auto";
	const dest = el.scrollHeight;
	if (windowExists) {
		requestAnimationFrame(() => {
			el.addEventListener("transitionend", afterExpandCallback, { once: true });
			el.style.height = "0px";
			el.style.transitionTimingFunction = "ease-out";
			addTransition(el);
			requestAnimationFrame(() => (el.style.height = dest + "px"));
		});
	}
	if (returnPromise) return returnPromise;
};

/**
 * Transitions an element from a detected height to 0
 * Will return a Promise when no 'done' callback is provided
 * @type {(el: HTMLElement, done?: function) => void | Promise<void>}
 */
export const collapse = (el, done) => {
	const returnPromise = (() => {
		if (!done)
			return new Promise((r) => {
				done = r;
			});
	})();

	if (!prefersMotion) {
		el.style.height = "0px";
		if (done) done();
		return returnPromise;
	}

	const afterCollapseCallback = getAfterCollapseCallback(done);
	removeTransition(el);
	const original = el.scrollHeight;
	if (windowExists) {
		requestAnimationFrame(() => {
			el.addEventListener("transitionend", afterCollapseCallback, {
				once: true,
			});
			el.style.height = original + "px";
			el.style.transitionTimingFunction = "ease-in";
			addTransition(el);
			requestAnimationFrame(() => (el.style.height = "0px"));
		});
	}
	if (returnPromise) return returnPromise;
};
