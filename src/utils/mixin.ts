import { typeOf } from './typeOf'

function isObject(element: unknown): asserts element is object {
  if (typeOf(element) !== 'object') {
    throw new TypeError(`[${element}] should be an object`)
  }
}

export const mixin = <TResult = any>(
  target: any,
  ...objects: any[]
): TResult => {
  ;[target, ...objects].forEach(isObject)
  objects.forEach((object) => cloneObj(target, object))
  return target as TResult
}

const cloneObj = (target: any, obj: any) => {
  Reflect.ownKeys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      target[key] = {}
      cloneObj(target[key], obj[key])
    } else {
      const descriptor = Object.getOwnPropertyDescriptor(obj, key)
      if (descriptor) Reflect.defineProperty(target, key, descriptor)
    }
  })
}
