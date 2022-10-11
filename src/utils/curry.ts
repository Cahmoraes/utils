type Func<T extends any[]> = (...args: T) => any

export const curry = (fn: Func<any>): Func<any[]> => {
  return function curried(...args: any[]) {
    if (fn.length <= args.length) {
      return Reflect.apply(fn, null, args)
    } else {
      return (...args2: unknown[]) => {
        return Reflect.apply(curried, null, args.concat(args2))
      }
    }
  }
}
