type MemoizedFn<T extends CallableFunction> = T & {
  clear: () => void
}

export const memo = <T extends CallableFunction>(fn: T): MemoizedFn<any> => {
  const cache = new Map<string, CallableFunction>()

  const memoizedFn = (...args: any[]): ReturnType<MemoizedFn<any>> => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<MemoizedFn<any>>
    }

    const result = fn(...args)
    cache.set(key, result)

    return result
  }

  Reflect.defineProperty(memoizedFn, 'clear', {
    value: () => cache.clear(),
  })

  return memoizedFn
}
