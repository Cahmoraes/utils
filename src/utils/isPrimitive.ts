/**
 * Check if element is a primitive type
 * @date 04/10/2022 - 21:10:18
 *
 * @param {unknown} element Element to check
 * @returns {boolean} True => primitive | False => not primitive
 */
export const isPrimitive = (element: unknown) => !(Object(element) === element)
