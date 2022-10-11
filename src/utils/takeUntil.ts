type Func<T> = (...args: any[]) => T

/**
 * Create a function that can be called a certain number of times. If the number of calls is greater than the configured number of times, the undefined value will be returned.
 * @date 11/10/2022 - 14:42:51
 *
 * @template T
 * @param {Func<T>} fn Function that will be called
 * @param {*} [until=Infinity] Quantity of numbers that function can be called
 * @returns {(...args: {}) => Func<T>} Configured Function with takeUntil
 */
export const takeUntil =
  <T>(fn: Func<T>, until = Infinity) =>
  (...args: unknown[]): Func<T> | undefined =>
    until-- > 0 ? (Reflect.apply(fn, null, args) as Func<T>) : undefined
