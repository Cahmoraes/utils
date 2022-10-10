import { describe, it, expect, jest } from '@jest/globals'
import { takeUntil } from '../src'

describe('takeUntil test suite', () => {
  it('should return a new function when takeUntil is called', () => {
    const doThing = takeUntil(jest.fn())
    expect(doThing).toBeInstanceOf(Function)
  })

  it('should execute function until 3 times', () => {
    const fn = jest.fn()
    const doThing = takeUntil(fn, 3)

    doThing(1)
    doThing(2)
    doThing(3)
    doThing(4)

    expect(fn).toHaveBeenCalledTimes(3)
    expect(fn.mock.calls).toEqual([[1], [2], [3]])
  })

  it('should execute function until infinity times', () => {
    const fn = jest.fn()
    const doThing = takeUntil(fn)

    doThing(1)
    doThing(2)
    doThing(3)
    doThing(4)
    doThing(5)

    expect(fn).toHaveBeenCalledTimes(5)
    expect(fn.mock.calls).toEqual([[1], [2], [3], [4], [5]])
  })
})
