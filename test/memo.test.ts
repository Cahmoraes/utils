import { describe, it, expect, jest } from '@jest/globals'
import { memo } from '../src'

describe.only('memo test suite', () => {
  it('should return a memoized function', () => {
    const fn = jest.fn((value: number) => value)

    const memoized = memo(fn)

    expect(memoized).toBeInstanceOf(Function)
  })

  it('should return a memoized value', () => {
    const fn = jest.fn((value: number) => value)
    const memoized = memo(fn)
    const result = memoized(2)

    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith(2)
    expect(result).toBe(2)
  })

  it('should not call original function when the original function was memoized', () => {
    const fn = jest.fn((value: number) => value)
    const memoized = memo(fn)
    memoized.clear()
    const result = memoized(2)

    memoized(2)

    expect(fn).toBeCalledTimes(1)
    // expect(fn).toBeCalledWith(0)
    // expect(result).toBe(2)
  })
})
