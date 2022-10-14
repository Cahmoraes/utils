import { typeOf } from './typeOf'

function isObject(element: unknown): asserts element is object {
  if (typeOf(element) !== 'object') {
    throw new TypeError(`[${element}] should be an object`)
  }
}

export const mixin = <TResult = any>(target: object, ...objects: any[]) => {
  ;[target, ...objects].forEach(isObject)
  return Object.assign(target, ...objects) as TResult
}
