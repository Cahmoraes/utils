/**
 * Apply pipeline to a value
 * @date 08/10/2022 - 16:35:18
 *
 * @param {...CallableFunction[]} fns Function or functions to pipeline
 * @returns {<T>(value: T) => any} Function with value to transform
 */
export const pipe =
  (...fns: CallableFunction[]) =>
  <T>(value: T) =>
    fns.reduce((acc, fn) => fn(acc), value)
