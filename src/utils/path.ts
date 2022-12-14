/**
 * Resolve internal Objects and Arrays paths. Return null when path not exists.
 * @date 08/10/2022 - 16:32:10
 *
 * @param {unknown} module - Object or Array
 * @param {string} pathString Path to property: 'addresses.0.street'
 * @returns {(T | null)} Existing property or null if none
 */

function isKeyOf(
  anObject: object,
  aKey: string,
): aKey is keyof typeof anObject {
  return Reflect.has(anObject, aKey)
}

export const path = <T>(module: unknown, pathString: string): T | null => {
  if (!module) return null

  const [firstPath, ...paths] = pathString.split('.')
  if (!isKeyOf(module, firstPath)) return null
  let fullPath = module[firstPath]

  for (const path of paths) {
    /* c8 ignore next */
    if (!fullPath) return null
    fullPath = fullPath[path]
  }

  return fullPath
}
