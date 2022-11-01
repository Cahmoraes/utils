type Curry = <R extends (...args: any) => any>(fn: R) => Curried<ReturnType<R>>

// type Curried<R> = (...args: any) => R | Curried<R>
type Curried<R> = (...args: any) => Curried2<R>

type Curried2<R> = R extends (...args: any) => any ? never : Curried<R>

export const curry: Curry = (fn) => {
  return function curried(...args: any) {
    if (fn.length <= args.length) {
      return Reflect.apply(fn, null, args)
    } else {
      return (...args2: any) => {
        return Reflect.apply(curried, null, args.concat(args2))
      }
    }
  }
}
