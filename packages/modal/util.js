export const CanCloseMixin = (superClass) => class extends superClass {
  patchClose = true
  _close = null
  close() { this._close() }
}

export const ProvidesCanCloseToSlotsMixin = (superClass) => class extends superClass {
  // HACK: slot-props don't seem to exist and neither does the context pattern for this
  /** @param {Event} evt */
  handleSlotChange(evt) {
    const children = evt.target.assignedNodes({ flatten: true })
    for (const child of children.filter(e => e.patchClose)) {
      child._close = () => this.close()
    }
  }
}

