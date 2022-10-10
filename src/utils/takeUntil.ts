type Func<T> = (...args: any[]) => T

export const takeUntil =
  <T>(fn: Func<T>, until = Infinity) =>
  (...args: unknown[]): Func<T> | undefined =>
    until-- > 0 ? (Reflect.apply(fn, null, args) as Func<T>) : undefined
