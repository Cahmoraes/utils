import { describe, it, expect } from '@jest/globals'
import { path } from '../src'

describe('path test suite', () => {
  it('should return valid property', () => {
    const obj = {
      name: 'caique',
    }

    const property = path(obj, 'name')

    expect(property).toBe(obj.name)
  })

  it('should return null when passed invalid property', () => {
    const obj = {
      name: 'caique',
    }

    const property = path(obj, 'age')

    expect(property).toBeFalsy()
  })

  it('should return null when passed invalid module', () => {
    const property = path(null, 'age')

    expect(property).toBeFalsy()
  })

  it('should return null when passed invalid module and property', () => {
    const property = path(null, '')

    expect(property).toBeFalsy()
  })

  it('should return nested valid property', () => {
    const obj = {
      name: 'caique',
      address: {
        street: 'Baker',
      },
    }

    const property = path(obj, 'address.street')

    expect(property).toBe(obj.address.street)
  })

  it('should return null when nested property is invalid', () => {
    const obj = {
      name: 'caique',
      address: {
        street: 'Baker',
      },
    }

    const property = path(obj, 'address.number')

    expect(property).toBeFalsy()
  })

  it('should return null when nested middle property is invalid', () => {
    const obj = {
      name: 'caique',
    }

    const property = path(obj, 'address.address.city')

    expect(property).toBeFalsy()
  })

  it('should return valid property when enter in array', () => {
    const obj = {
      streets: ['Baker Street', 'Avenue 126'],
    }

    const result_1 = path(obj, 'streets.0')
    const result_2 = path(obj, 'streets.1')

    expect(result_1).toBe(obj.streets[0])
    expect(result_2).toBe(obj.streets[1])
  })

  it('should return valid property when enter in object array', () => {
    const obj = {
      addresses: [{ street: 'Baker Street' }, { street: 'Avenue 126' }],
    }

    const result_1 = path(obj, 'addresses.0.street')
    const result_2 = path(obj, 'addresses.1.street')

    expect(result_1).toBe(obj.addresses[0].street)
    expect(result_2).toBe(obj.addresses[1].street)
  })
})
