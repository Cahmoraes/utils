import { describe, it, expect } from '@jest/globals'
import { curry } from '../src'

describe('curry test suite', () => {
  it('should return a function', () => {
    const sum = (n1: number, n2: string) => n1 + n2
    const curriedSum = curry(sum)

    expect(curriedSum).toBeInstanceOf(Function)
  })

  it('should return one function for each parameter', () => {
    const sum = (n1: number, n2: string) => n1 + n2
    const curried1 = curry(sum)
    const curried2 = curried1(2)

    expect(curried1).toBeInstanceOf(Function)
    expect(curried2).toBeInstanceOf(Function)

    if (typeof curried2 === 'function') expect(curried2(2)).toBe(4)
  })

  it('should return value when passed all arguments to the function', () => {
    const sum = (n1: number, n2: string) => n1 + n2
    const curried = curry(sum)
    const value = curried(2, 2)

    expect(curried).toBeInstanceOf(Function)
    expect(value).toBe(4)
  })

  it('should return one function by argument ignoring not necessary arguments', () => {
    const sum = (n1: number, n2: number, n3: number) => n1 + n2 + n3
    const curried: any = curry(sum)
    const value = curried(2, 2, 4, 5)

    expect(curried).toBeInstanceOf(Function)
    expect(value).toBe(8)
    expect(curried(2)(2)(2)).toBe(6)
  })
})
