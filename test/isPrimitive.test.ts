import { describe, it, expect } from '@jest/globals'
import { isPrimitive } from '../src'

describe('isPrimitive test suite', () => {
  it('should return true when evaluate a string type', () => {
    expect(isPrimitive('hello world')).toBeTruthy()
  })

  it('should return false when evaluate an Array type', () => {
    expect(isPrimitive([])).toBeFalsy()
  })

  it('should return false when evaluate an Object type', () => {
    expect(isPrimitive({})).toBeFalsy()
  })

  it('should return true when evaluate a number type', () => {
    expect(isPrimitive(0)).toBeTruthy()
  })

  it('should return true when evaluate a null type', () => {
    expect(isPrimitive(null)).toBeTruthy()
  })

  it('should return false when evaluate a Function type', () => {
    expect(isPrimitive(() => {})).toBeFalsy()
  })

  it('should return true when evaluate an undefined type', () => {
    expect(isPrimitive(undefined)).toBeTruthy()
  })

  it('should return false when evaluate a Promise type', () => {
    expect(isPrimitive(Promise.resolve(2))).toBeFalsy()
  })

  it('should return false when evaluate a Map type', () => {
    expect(isPrimitive(new Map())).toBeFalsy()
  })

  it('should return false when evaluate a Set type', () => {
    expect(isPrimitive(new Set())).toBeFalsy()
  })
})
