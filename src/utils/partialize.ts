type PartialFunction<T> = (...args: T[]) => T

export const partialize = <T>(
  fn: PartialFunction<T>,
  ...args: any[]
): PartialFunction<T> => fn.bind(null, ...args)
