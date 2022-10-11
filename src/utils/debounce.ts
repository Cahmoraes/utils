type Func<TS extends any[], R> = (...args: TS) => R

/**
 * This function implements debounce pattern
 * @date 11/10/2022 - 14:40:38
 *
 * @param {Func<any[], any>} fn Function to apply debounce
 * @param {number} [milliseconds=200] Time in milliseconds to schedule a function call
 * @returns {(...args: {}) => void} Function with debounce pattern
 */
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
