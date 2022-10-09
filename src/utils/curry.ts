type Fn<T> = (...args: any[]) => T
type Curried<T> = (...args: any[]) => T

export const curry = <T>(fn: Fn<T>) => {
  return function curried(...args: unknown[]) {
    if (fn.length <= args.length) {
      return Reflect.apply(fn, null, args)
    } else {
      return (...args2: unknown[]) => {
        return Reflect.apply(curried, null, args.concat(args2)) as Curried<T>
      }
    }
  }
}
