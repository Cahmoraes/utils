import {
  describe,
  it,
  expect,
  jest,
  beforeEach,
  afterEach,
  beforeAll,
} from '@jest/globals'
import { debounce } from '../src'

describe('debounce test suite', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  beforeEach(() => {
    jest.spyOn(global, 'setTimeout')
  })

  afterEach(() => {
    ;(global.setTimeout as any).mockRestore()
  })

  it('should return a new function', () => {
    const returnNumber = (n1: number) => n1
    const debounced = debounce(returnNumber)

    debounced(3)

    expect(global.setTimeout).toBeCalledWith(expect.any(Function), 200)
  })

  it('should call setTimeout with callback', () => {
    const returnNumber = (n1: number) => n1
    const debounced = debounce(returnNumber)

    debounced(3)
    expect(global.setTimeout).toBeCalledWith(expect.any(Function), 200)
  })

  it('should cancel scheduled callback', () => {
    const returnNumber = jest.fn((n1: number) => n1)
    const milliseconds = 400
    const debounced = debounce(returnNumber, milliseconds)

    debounced(3)
    debounced(3)
    debounced(3)

    jest.runAllTimers()

    expect(global.setTimeout).toBeCalledWith(expect.any(Function), milliseconds)
    expect(returnNumber).toBeCalledTimes(1)
    expect(returnNumber).toBeCalledWith(3)
  })
})
