import { describe, it, expect } from '@jest/globals'
import { deepFreeze } from '../src'

describe('deepFreeze test suite', () => {
  it('should return a freezed structure', () => {
    const user = {
      name: 'John Doe',
      age: 29,
      address: {
        street: 'Baker',
        number: null,
      },
      books: ['sapiens'],
    }

    const freezed = deepFreeze(user)
    expect(Object.isFrozen(freezed)).toBeTruthy()
    expect(Object.isFrozen(freezed.books)).toBeTruthy()
  })

  it('should return a freezed structure with nested structure', () => {
    const obj = {
      name: 'John Doe',
      age: 29,
      address: {
        street: 'Baker',
        number: null,
      },
    }

    const freezed = deepFreeze(obj)
    expect(Object.isFrozen(freezed)).toBeTruthy()
    expect(Object.isFrozen(freezed.address)).toBeTruthy()
  })

  it('should a simple array', () => {
    const books = ['sapiens']
    const freezed = deepFreeze(books)
    expect(Object.isFrozen(freezed)).toBeTruthy()
  })

  it('should return an Array with freezed structure with nested structure', () => {
    const array = [1, 2, 3, [3, 4, 5]]

    const freezed = deepFreeze(array)
    expect(Object.isFrozen(freezed)).toBeTruthy()
    expect(Object.isFrozen(freezed[3])).toBeTruthy()
  })
})
