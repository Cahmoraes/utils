/**
 * Create Map from Object
 * @param {Record<string, TValue>} anObject
 * @returns {Map}
 */
export const makeMap = <TValue = unknown>(anObject: Record<string, TValue>) =>
  new Map(Object.entries(anObject))
