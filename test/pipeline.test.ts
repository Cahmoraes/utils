import { describe, it, expect, jest } from '@jest/globals'
import { pipeline } from '../src'

describe('pipeline test suite', () => {
  it('should call functions in pipeline', () => {
    const fn_1 = jest.fn((value: unknown) => value)
    const fn_2 = jest.fn((value: unknown) => value)
    const value = 'value'
    pipeline(fn_1, fn_2)(value)

    expect(fn_1).toHaveBeenCalledTimes(1)
    expect(fn_1).toHaveBeenCalledWith(value)

    expect(fn_2).toHaveBeenCalledTimes(1)
    expect(fn_2).toHaveBeenCalledWith(value)
  })

  it('pipeline should return a function when its called', () => {
    const fn_1 = jest.fn()
    const result = pipeline(fn_1)

    expect(result).toBeInstanceOf(Function)
  })

  it('pipeline should return a value transformed', () => {
    const fn_1 = jest.fn((value: string) => value.toUpperCase())
    const fn_2 = jest.fn((value: string) => value.split(''))
    const value = 'value'
    const result = pipeline(fn_1, fn_2)(value)

    expect(result).toEqual(value.toLocaleUpperCase().split(''))
  })
})
