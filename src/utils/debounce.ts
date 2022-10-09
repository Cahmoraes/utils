type Func<TS extends any[], R> = (...args: TS) => R

export const debounce = (fn: Func<any[], any>, milliseconds = 200) => {
  let timer: any = 0

  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      Reflect.apply(fn, null, args)
      timer = null
    }, milliseconds)
  }
}
