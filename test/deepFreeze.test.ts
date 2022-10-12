import { describe, it, expect } from '@jest/globals'
import { deepFreeze } from '../src'

const isFrozen = (obj: unknown) => Object.isFrozen(obj)

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
    expect(isFrozen(freezed)).toBeTruthy()
    expect(isFrozen(freezed.books)).toBeTruthy()
  })

  it('should return a freezed structure with nested structure', () => {
    const user = {
      name: 'John Doe',
      age: 29,
      address: {
        street: 'Baker',
        number: null,
      },
    }

    const freezed = deepFreeze(user)
    expect(isFrozen(freezed)).toBeTruthy()
    expect(isFrozen(freezed.address)).toBeTruthy()
  })

  it('should a simple array', () => {
    const books = ['sapiens']
    const freezed = deepFreeze(books)
    expect(isFrozen(freezed)).toBeTruthy()
  })

  it('should return an Array with freezed structure with nested structure', () => {
    const array = [1, 2, 3, [3, 4, 5]]

    const freezed = deepFreeze(array)
    expect(isFrozen(freezed)).toBeTruthy()
    expect(isFrozen(freezed[3])).toBeTruthy()
  })

  it('should return a Map with freezed structure with nested structure', () => {
    const ageMap = new Map().set('age', 28)
    const map = new Map().set('name', 'caique').set(ageMap, 28)

    const freezed = deepFreeze(map)

    expect(isFrozen(freezed)).toBeTruthy()
    expect(isFrozen(freezed.get(ageMap))).toBeTruthy()
    expect(freezed.get('address')).toBeFalsy()

    expect(() => map.set('address', { street: 'Baker street' })).toThrow()
    expect(() => map.clear()).toThrow()
    expect(() => map.delete('name')).toThrow()
  })

  it('should return a Set with freezed structure with nested structure', () => {
    const setObj = new Set(['caique'])

    const set = new Set().add(setObj)

    const freezed = deepFreeze(set)

    expect(freezed).toBeInstanceOf(Set)
    expect(isFrozen(freezed)).toBeTruthy()
    expect(isFrozen(freezed.has(setObj))).toBeTruthy()

    expect(() => set.add({ street: 'Baker street' })).toThrow()
    expect(() => set.clear()).toThrow()
    expect(() => set.delete(setObj)).toThrow()
  })

  it('Should freeze a complex structure', () => {
    const user = {
      name: 'John Doe',
      age: 29,
      address: {
        street: 'Baker',
        number: null,
      },
      books: ['sapiens'],
      set: new Set([['set']]),
      map: new Map().set('key', 'valeu'),
      array: [],
      object: {},
    }
    const map = new Map().set(user, '0').set('obj', user)

    const freezed = deepFreeze(map)

    expect(freezed).toBeInstanceOf(Map)
    expect(isFrozen(freezed)).toBeTruthy()
    expect(isFrozen(freezed.get('obj'))).toBeTruthy()
    expect(isFrozen(freezed.get('obj').set)).toBeTruthy()
    expect(isFrozen(freezed.get('obj').map)).toBeTruthy()
    expect(isFrozen(freezed.get('obj').array)).toBeTruthy()
    expect(isFrozen(freezed.get('obj').object)).toBeTruthy()

    expect(freezed.get('obj').map).toBeInstanceOf(Map)
    expect(freezed.get('obj').set).toBeInstanceOf(Set)
    expect(freezed.get('obj').array).toBeInstanceOf(Array)
    expect(freezed.get('obj').object).toBeInstanceOf(Object)

    expect(() => freezed.set('new key', 'new property')).toThrow()
    expect(() => freezed.get('obj').set.add('new value')).toThrow()
    expect(() => freezed.get('obj').map.set('new key', 'new value')).toThrow()
    expect(() => freezed.get('obj').array.push('new element')).toThrow()
    expect(() => (freezed.get('obj').object.name = 'new name')).toThrow()
  })
})
