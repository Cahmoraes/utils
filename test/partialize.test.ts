import { describe, it, expect } from '@jest/globals'
import { partialize } from '../src'

describe('partialize test suite', () => {
  it('should return a partial function', () => {
    const sum = (n1: number, n2: number) => n1 + n2

    const partialFn = partialize(sum, 1, 2)

    expect(partialFn).toBeInstanceOf(Function)
  })

  it('should return a valid value from partial function', () => {
    const sum = (n1: number, n2: number) => n1 + n2

    const sum1 = partialize(sum, 1)
    const result = sum1(2)

    expect(result).toBe(3)
  })

  it('should return a valid value from partial function with 3 args', () => {
    const sum = (n1: number, n2: number, n3: number) => n1 + n2 + n3

    const sum3 = partialize(sum, 1, 2)
    const result = sum3(2)

    expect(result).toBe(5)
  })
})
