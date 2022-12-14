import { describe, it, expect, jest } from '@jest/globals'
import { pipe } from '../src'

describe('pipe test suite', () => {
  it('should call functions in pipe', () => {
    const fn_1 = jest.fn((value: unknown) => value)
    const fn_2 = jest.fn((value: unknown) => value)
    const value = 'value'
    pipe(value, fn_1, fn_2)

    expect(fn_1).toHaveBeenCalledTimes(1)
    expect(fn_1).toHaveBeenCalledWith(value)

    expect(fn_2).toHaveBeenCalledTimes(1)
    expect(fn_2).toHaveBeenCalledWith(value)
  })

  it('pipe should return a value transformed', () => {
    const fn_1 = jest.fn((value: string) => value.toUpperCase())
    const fn_2 = jest.fn((value: string) => value.split(''))
    const value = 'value'
    const result = pipe(value, fn_1, fn_2)

    expect(result).toEqual(value.toLocaleUpperCase().split(''))
  })

  it('pipe should return a value transformed using 3 operations', () => {
    const fn_1 = (value: string) => Number(value)
    const value = '1'

    const result = pipe(value, fn_1)

    expect(result).toEqual(Number(value.toLocaleUpperCase()))
  })
})
