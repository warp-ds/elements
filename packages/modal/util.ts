// eslint-disable-next-line
export declare type Constructor<T = Record<string, unknown>> = new (...args: any[]) => T;

export const CanCloseMixin: <TBase extends Constructor<HTMLElement>>(
	SuperClass: TBase,
) => Constructor<{ close: () => void }> & TBase = (superClass) =>
	class extends superClass {
		patchClose = true;
		_close = null;
		close() {
			// @ts-expect-error This should blow up so users implement the mixin
			this._close();
		}
	};

export const ProvidesCanCloseToSlotsMixin: <
	TBase extends Constructor<HTMLElement>,
>(
	SuperClass: TBase,
) => Constructor<{ handleSlotChange: (evt: Event) => void }> & TBase = (
	superClass,
) =>
	class extends superClass {
		// HACK: slot-props don't seem to exist and neither does the context pattern for this
		handleSlotChange(evt: Event) {
			// @ts-expect-error It's fine, everything's fine
			const children = evt.target.assignedNodes({ flatten: true });
			// @ts-expect-error It's fine, everything's fine
			for (const child of children.filter((e) => e.patchClose)) {
				// @ts-expect-error users have to implement the close method
				child._close = () => this.close();
			}
		}
	};
