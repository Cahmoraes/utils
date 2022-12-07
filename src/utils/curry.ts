type Func<TS extends any[], R> = (...args: TS) => R

interface Curry {
  <A, R>(func: (arg: A) => R): CurriedFunction1<A, R>
  <A1, A2, R>(func: (arg1: A1, arg2: A2) => R): CurriedFunction2<A1, A2, R>
  <A1, A2, A3, R>(func: (arg1: A1, arg2: A2, arg3: A3) => R): CurriedFunction3<
    A1,
    A2,
    A3,
    R
  >
  (func: Func<any[], any>): Func<any[], any>
}
interface CurriedFunction1<A, R> {
  (): CurriedFunction1<A, R>
  (arg: A): R
}
interface CurriedFunction2<A1, A2, R> {
  (): CurriedFunction2<A1, A2, R>
  (arg1: A1): CurriedFunction1<A2, R>
  (arg1: '_', arg2: A2): CurriedFunction1<A1, R>
  (arg1: A1, arg2: A2): R
}

interface CurriedFunction3<A1, A2, A3, R> {
  (): CurriedFunction3<A1, A2, A3, R>
  (arg1: A1): CurriedFunction2<A1, A2, R>
  (arg1: '_', arg2: A2): CurriedFunction1<A1, R>
  (arg1: A1, arg2: A2): CurriedFunction3<A1, A2, A3, R>
  (arg1: A1, arg2: A2, arg3: A3): R
}

export const curry: Curry = (fn: Func<any[], any>) => {
  function curried(...args: any[]) {
    if (fn.length <= args.length) {
      return Reflect.apply(fn, null, args)
    } else {
      return (...args2: any) => {
        return Reflect.apply(curried, null, args.concat(args2))
      }
    }
  }

  return curried
}
