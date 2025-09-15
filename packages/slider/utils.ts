/**
 * Restricts the value to the given range.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function valueToRatio(value: number, min: number, max: number): number {
  return clamp((value - min) / (max - min), 0, 1);
}

export function ratioToValue(ratio: number, min: number, max: number, step: number): number {
  let value = (max - min) * ratio;

  value = Math.round(value / step) * step + min;
  return clamp(min, value, max);
}

export function nextValue(value: number, step: number): number {
  return value + step;
}

export function prevValue(value: number, step: number): number {
  return value - step;
}
