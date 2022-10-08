type Callback<K> = <T>(value: T) => K | Promise<K>

export const asyncPipeline =
  <K>(...fns: Callback<K>[]) =>
  (value: K | Promise<K>) =>
    fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      }
      return fn(acc)
    }, value)
