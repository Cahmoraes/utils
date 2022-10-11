import { isPrimitive } from './isPrimitive'

/**
 * freeze recursively arrays and object structures
 * @date 11/10/2022 - 14:39:31
 *
 * @param {T} data Array or Object Structure
 * @returns {T} freezed data
 */
export const deepFreeze = <T extends object>(data: T): T => {
  if (!isPrimitive(data)) {
    Reflect.ownKeys(data).forEach((key) => deepFreeze(data[key]))
  }

  return Object.freeze(data)
}
