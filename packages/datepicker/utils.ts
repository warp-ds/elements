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

export function getDateInputType(
  userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '',
): 'date' | 'text' {
  const isIOS = /iP(hone|od|ad)/.test(userAgent);
  const isSafari = /Safari/.test(userAgent) && !/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/.test(userAgent);

  return isIOS || isSafari ? 'text' : 'date';
}

export function getDateInputPlaceholder(locale: string): string {
  const placeholderLocale = locale === 'en' ? 'en-GB' : locale;
  const parts = new Intl.DateTimeFormat(placeholderLocale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(new Date(Date.UTC(2006, 0, 2)));

  return parts
    .map((part) => {
      if (part.type === 'day') return 'dd';
      if (part.type === 'month') return 'mm';
      if (part.type === 'year') return 'yyyy';
      return part.value;
    })
    .join('');
}
