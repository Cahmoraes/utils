import { isPrimitive } from './isPrimitive'

/**
 * freeze recursively arrays and object structures
 * @date 11/10/2022 - 14:39:31
 *
 * @param {T} data Array or Object Structure
 * @returns {Readonly<T>} freezed data
 */
export const deepFreeze = <T extends object>(data: T): Readonly<T> => {
  if (!isPrimitive(data)) {
    if (isMap(data) || isSet(data)) {
      freezeMapOrSet(data)
      entries(data)
    } else {
      Reflect.ownKeys(data).forEach((key) => deepFreeze((data as any)[key]))
    }
  }

  return Object.freeze(data)
}

const errors = new Map([
  [1, 'This object has been frozen and should not be mutated'],
])

const isMap = (element: unknown): element is Map<unknown, unknown> =>
  element instanceof Map

const isSet = (element: unknown): element is Set<unknown> =>
  element instanceof Set

const entries = (data: Map<unknown, unknown> | Set<unknown>) =>
  data.forEach((value: any) => deepFreeze(value))

const freezeMapOrSet = (mapOrSet: Map<unknown, unknown> | Set<unknown>) => {
  if (isMap(mapOrSet)) {
    freezeMap(mapOrSet)
  } else {
    freezeSet(mapOrSet)
  }
}

const die = () => {
  throw Error(errors.get(1))
}

const freezeMap = (map: Map<unknown, unknown>) => {
  map.set = die
  map.delete = die
  map.clear = die
}

const freezeSet = (set: Set<unknown>) => {
  set.add = die
  set.delete = die
  set.clear = die
}
