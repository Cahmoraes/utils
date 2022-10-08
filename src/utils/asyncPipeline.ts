type Callback<T> = (value: T) => T | Promise<T>

export const asyncPipeline =
  <K>(...fns: Callback<K>[]) =>
  (value: K | Promise<K>) =>
    fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      }
      return fn(acc as Awaited<Promise<K>>)
    }, value)
