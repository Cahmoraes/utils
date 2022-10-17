import { describe, it, expect, jest } from '@jest/globals'
import { pipe } from '../src'

describe('pipe test suite', () => {
  it('should call functions in pipe', () => {
    const fn_1 = jest.fn((value: unknown) => value)
    const fn_2 = jest.fn((value: unknown) => value)
    const value = 'value'
    pipe(fn_1, fn_2)(value)

    expect(fn_1).toHaveBeenCalledTimes(1)
    expect(fn_1).toHaveBeenCalledWith(value)

    expect(fn_2).toHaveBeenCalledTimes(1)
    expect(fn_2).toHaveBeenCalledWith(value)
  })

  it('pipe should return a function when its called', () => {
    const fn_1 = jest.fn()
    const result = pipe(fn_1)

    expect(result).toBeInstanceOf(Function)
  })

  it('pipe should return a value transformed', () => {
    const fn_1 = jest.fn((value: string) => value.toUpperCase())
    const fn_2 = jest.fn((value: string) => value.split(''))
    const value = 'value'
    const result = pipe(fn_1, fn_2)(value)

    expect(result).toEqual(value.toLocaleUpperCase().split(''))
  })

  it('pipe should return a value transformed using 3 operations', () => {
    const fn_1 = (value: string) => Number(value)
    const value = '1'

    const result = pipe(fn_1)(value)

    expect(result).toEqual(Number(value.toLocaleUpperCase()))
  })
})
