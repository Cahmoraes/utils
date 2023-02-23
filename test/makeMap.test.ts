import { describe, it, expect, jest } from '@jest/globals'
import { makeMap } from '../src'

describe('makeMap test suite', () => {
  it('should create Map from object', () => {
    const user = {
      name: 'John',
      age: 29,
    }

    const userMap = makeMap(user)

    expect(userMap).toBeInstanceOf(Map)
    expect(userMap.has('name')).toBeTruthy()
    expect(userMap.get('name')).toBe(user.name)
    expect(userMap.has('age')).toBe(user.age)
    expect(userMap.get('age')).toBe(user.age)
  })
})
