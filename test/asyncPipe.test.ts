import { describe, it, expect, jest } from '@jest/globals'
import { asyncPipe } from '../src'

describe('asyncPipe test suite', () => {
  it('should call functions in asyncPipe', async () => {
    const fn_1 = jest.fn(() => Promise.resolve(2))

    const fn_2 = jest.fn(() => Promise.resolve(5))

    const value = Promise.resolve(5)

    await asyncPipe(value, fn_1, fn_2)

    expect(fn_1).toHaveBeenCalledTimes(1)
    expect(fn_1).toHaveBeenCalledWith(await value)

    expect(fn_2).toHaveBeenCalledTimes(1)
    expect(fn_2).toHaveBeenCalledWith(2)
  })

  it('asyncPipe should return a function when its called', async () => {
    const fn_1 = jest.fn(() => Promise.resolve(2))

    const fn_2 = jest.fn(() => Promise.resolve(2))

    const value = 5

    await asyncPipe(value, fn_1, fn_2)

    expect(fn_1).toHaveBeenCalledTimes(1)
    expect(fn_1).toHaveBeenCalledWith(value)

    expect(fn_2).toHaveBeenCalledTimes(1)
    expect(fn_2).toHaveBeenCalledWith(2)
  })

  it('should apply async pipeline', async () => {
    const double = async (n1: number) => n1 * 2
    const triple = async (n1: number) => n1 * 3

    const result = await asyncPipe(Promise.resolve(3), double, triple)

    expect(result).toBe(18)
  })
})
