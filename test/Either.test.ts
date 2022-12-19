import { describe, it, expect } from '@jest/globals'
import { Either, Left, Right, left, right } from '../src'

describe.only('Either test suite', () => {
  it('should return a left instance', () => {
    const result = left(1)

    expect(result).toBeInstanceOf(Left)
    expect(result.isRight()).toBeFalsy()
    expect(result.isLeft()).toBeTruthy()
    expect(result.value).toBe(1)
  })

  it('should return a Right instance', () => {
    const result = right(1)

    expect(result).toBeInstanceOf(Right)
    expect(result.isRight()).toBeTruthy()
    expect(result.isLeft()).toBeFalsy()
    expect(result.value).toBe(1)
  })
})
