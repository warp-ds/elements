/**
 * Get the custom element tag name from a manifest entry
 * @param {object} entry - A CEM declaration or module entry
 * @returns {string|null} The tag name if available, else null
 */
export function getTagName(entry) {
  // Some entries (like from declarations) put tagName directly
  if (entry.tagName) {
    return entry.tagName;
  }

  // Others nest it under 'customElement' metadata
  if (entry.customElement && entry.customElement.tagName) {
    return entry.customElement.tagName;
  }

  // Some tools stick it into 'declarations'
  if (Array.isArray(entry.declarations)) {
    for (const decl of entry.declarations) {
      if (decl.tagName) {
        return decl.tagName;
      }
    }
  }

  return null;
}
