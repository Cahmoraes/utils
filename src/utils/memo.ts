type MemoizedFn<T> = T & {
  clear: () => void
}

type Callback<K> = (...args: K[]) => K

export const memo = <K>(fn: K): MemoizedFn<ReturnType<Callback<K>>> => {
  const cache = new Map<string, ReturnType<Callback<K>>>()

  const memoizedFn = (...args: unknown[]): ReturnType<Callback<K>> => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<Callback<K>>
    }

    const result = (fn as CallableFunction)(...args)
    cache.set(key, result)

    return result
  }

  Reflect.defineProperty(memoizedFn, 'clear', {
    value: () => cache.clear(),
  })

  return memoizedFn as any
}
