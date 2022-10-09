type PartialFunction<T> = (...args: any[]) => T

/**
 * Apply pattern Partial Application
 * @date 08/10/2022 - 16:30:22
 *
 * @param {PartialFunction<T>} fn Function to apply partial application
 * @param {...any[]} args args to apply in the Partial Function
 * @returns {PartialFunction<T>} Partial Function
 */
export const partialize = <T>(
  fn: PartialFunction<T>,
  ...args: any[]
): PartialFunction<T> => fn.bind(null, ...args)
