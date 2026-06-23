/**
 * This type only exists to narrow down the `target` property of Event so it's
 * more ergonomic to use in form elements. It's not an actual event type. 'change'
 * emits a generic Event.
 */
export interface ChangeEventWithTarget<Target = Element> extends Event {
	target: EventTarget & Target;
}

/**
 * This type only exists to narrow down the `target` property of InputEvent so it's
 * more ergonomic to use in form elements. It's not an actual event type. 'input'
 * emits an InputEvent.
 */
export interface InputEventWithTarget<Target = Element> extends InputEvent {
	target: EventTarget & Target;
}
