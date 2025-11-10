import { nanoid } from 'nanoid';

export function uniqueId(prefix = '') {
  return `${prefix}${nanoid()}`;
}
