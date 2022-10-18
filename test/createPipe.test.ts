import { describe, it, expect, jest } from '@jest/globals'
import { createPipe } from '../src'

describe('createPipe test suite', () => {
  it('should call functions in createPipe', () => {
    const fn_1 = jest.fn((value: unknown) => value)
    const fn_2 = jest.fn((value: unknown) => value)
    const value = 'value'
    createPipe(fn_1, fn_2)(value)

    expect(fn_1).toHaveBeenCalledTimes(1)
    expect(fn_1).toHaveBeenCalledWith(value)

    expect(fn_2).toHaveBeenCalledTimes(1)
    expect(fn_2).toHaveBeenCalledWith(value)
  })

  it('createPipe should return a function when its called', () => {
    const fn_1 = jest.fn()
    const result = createPipe(fn_1)

    expect(result).toBeInstanceOf(Function)
  })

  it('createPipe should return a value transformed', () => {
    const fn_1 = jest.fn((value: string) => value.toUpperCase())
    const fn_2 = jest.fn((value: string) => value.split(''))
    const value = 'value'
    const result = createPipe(fn_1, fn_2)(value)

    expect(result).toEqual(value.toLocaleUpperCase().split(''))
  })

  it('createPipe should return a value transformed using 3 operations', () => {
    const fn_1 = (value: string) => Number(value)
    const value = '1'

    const result = createPipe(fn_1)(value)

    expect(result).toEqual(Number(value.toLocaleUpperCase()))
  })
})
