type Callback<T> = (value: T) => T | Promise<T>

/**
 * Apply async pipeline to a value
 * @date 08/10/2022 - 16:36:26
 *
 * @template K
 * @param {...Callback<K>[]} fns Function or functions to pipeline
 * @returns {(value: any) => any} Function with value to transform
 */
export const asyncPipe =
  <K>(...fns: Callback<K>[]) =>
  (value: K | Promise<K>) =>
    fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      }
      return fn(acc as Awaited<Promise<K>>)
    }, value)
