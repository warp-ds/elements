import * as classLists from './supported.list.js';

export const supported = Object.values(classLists)
  .map((e) => (typeof e === 'object' ? Object.values(e).map((e) => e.split(/\s/)) : e.split(/\s/)))
  .flat(Number.POSITIVE_INFINITY);
