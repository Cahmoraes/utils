export const pipeline =
  (...fns: CallableFunction[]) =>
  <T>(value: T) =>
    fns.reduce((acc, fn) => fn(acc), value)
