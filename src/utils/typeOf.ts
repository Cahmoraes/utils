/**
 * Return the type of element passed in argument
 * @date 08/10/2022 - 17:20:28
 *
 * @param {unknown} elementToCheck Element to check type
 * @returns {String} type of element
 */
export const typeOf = (elementToCheck: unknown) => {
  const stringType = Reflect.apply(
    Object.prototype.toString,
    elementToCheck,
    [],
  )
  return stringType
    .substring(stringType.indexOf(' ') + 1, stringType.indexOf(']'))
    .toLowerCase()
}
