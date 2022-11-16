/**
 * Check if object is type of Interface in Type Parameter
 * @date 16/11/2022 - 19:20:18
 *
 * @export
 * @template Interface - Interface to check
 * @param {unknown} anObj - Object to check
 * @param {...(keyof Interface)[]} keys - keys of interface to check in object
 * @returns {anObj is Interface}
 */
export function checkInterface<Interface>(
  anObj: unknown,
  ...keys: (keyof Interface)[]
): anObj is Interface {
  if (anObj && typeof anObj === 'object' && keys.every((key) => key in anObj)) {
    return true
  }
  return false
}
