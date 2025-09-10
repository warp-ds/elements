const dateOnlyRe = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Parses an ISO-8601 string into a JS Date.
 *
 * Supports:
 *  - YYYY-MM-DD
 *  - YYYY-MM-DDThh:mm:ss(.sss)?(Z|±hh:mm)?
 *
 * @param {string} isoString
 * @returns {Date}
 * @throws {TypeError} if input isn’t a string
 * @throws {Error} if string is not a valid ISO-8601 date
 */
export function fromISOToDate(isoString: string): Date | null {
  if (typeof isoString !== 'string') {
    return null;
  }

  // If it's a bare date (YYYY-MM-DD), treat it as UTC midnight
  let normalized = isoString;
  if (dateOnlyRe.test(isoString)) {
    normalized = `${isoString}T00:00:00Z`;
  }

  const timestamp = Date.parse(normalized);
  if (Number.isNaN(timestamp)) {
    return null;
  }

  return new Date(timestamp);
}
