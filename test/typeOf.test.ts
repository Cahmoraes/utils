import { describe, it, expect } from '@jest/globals'
import { typeOf } from '../src'

describe('typeOf test suite', () => {
  it('should return string that represents type null when pass null value', () => {
    const result = typeOf(null)
    expect(result).toBe('null')
  })

  it('should return string that represents type object when pass an object', () => {
    const result = typeOf({})
    expect(result).toBe('object')
  })

  it('should return string that represents type number object when pass a number value', () => {
    const result = typeOf(0)
    expect(result).toBe('number')
  })

  it('should return string that represents type string when pass a string value', () => {
    const result = typeOf('string')
    expect(result).toBe('string')
  })

  it('should return string that represents type Array when pass a Array object', () => {
    const result = typeOf([])
    expect(result).toBe('array')
  })

  it('should return string that represents type Map when pass a Map object', () => {
    const result = typeOf(new Map())
    expect(result).toBe('map')
  })

  it('should return string that represents type Set when pass a Set object', () => {
    const result = typeOf(new Set())
    expect(result).toBe('set')
  })

  it('should return string that represents type undefined when pass a undefined value', () => {
    const result = typeOf(undefined)
    expect(result).toBe('undefined')
  })

  it('should return string that represents type Symbol when pass a Symbol value', () => {
    const result = typeOf(Symbol())
    expect(result).toBe('symbol')
  })

  it('should return string that represents type Function when pass a Function value', () => {
    const result = typeOf(() => {})
    expect(result).toBe('function')
  })
})
