import {
  describe,
  it,
  expect,
  jest,
  beforeEach,
  afterEach,
} from '@jest/globals'
import { debounce } from '../src'

describe('debounce test suite', () => {
  beforeEach(() => {
    jest.spyOn(global, 'setTimeout')
  })

  afterEach(() => {
    ;(global.setTimeout as any).mockRestore()
  })

  // jest.useRealTimers()
  // jest.spyOn(global, 'setTimeout')

  it('should return a new function', () => {
    const returnNumber = (n1: number) => n1
    const debounced = debounce(returnNumber)

    debounced(3)
    // jest.runAllTimers()
    ;(global.setTimeout as any).mockImplementation((callback) => callback())
    expect(global.setTimeout).toBeCalledWith(expect.any(Function), 200)
  })

  it('should call setTimeout with callback', () => {
    const returnNumber = (n1: number) => n1
    const debounced = debounce(returnNumber)

    debounced(3)
    // jest.runAllTimers()
    ;(global.setTimeout as any).mockImplementation((callback) => callback())
    expect(global.setTimeout).toBeCalledWith(expect.any(Function), 200)
  })

  it('should cancel scheduled callback', () => {
    const returnNumber = (n1: number) => n1
    const debounced = debounce(returnNumber)

    debounced(3)
    debounced(3)
    ;(global.setTimeout as any).mockImplementation((callback) => callback())
    expect(global.setTimeout).toBeCalledWith(expect.any(Function), 200)
  })
})
