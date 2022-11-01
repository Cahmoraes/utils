import { describe, it, expect, jest } from '@jest/globals'
import { mixin } from '../src'

describe('mixin test suite', () => {
  it('should return an Object', () => {
    const obj = {}
    const person = { name: 'caique', age: 28 }

    const result = mixin(obj, person)

    expect(result).toBeInstanceOf(Object)
    expect(result).toEqual(person)
  })

  it('should return an Object with properties copied from others objects', () => {
    const obj = {}

    const person = {
      name: 'john',
      lastName: 'Joe',
      age: 28,
    }

    const job = {
      greeting() {
        return (this as any).name
      },
    }

    const result = mixin<typeof person & typeof job>(obj, person, job)

    expect(result).toBeInstanceOf(Object)
    expect(result).toEqual({ ...person, ...job })
    expect(result.greeting()).toBe(person.name)
  })

  it('should return an Object with nested properties copied from others objects', () => {
    const obj = {}

    const person = {
      name: 'john',
      lastName: 'Joe',
      age: 28,
      props: {
        name: 'john',
      },
    }

    const job = {
      greeting() {
        return (this as any).name
      },
    }

    const result = mixin<typeof person & typeof job>(obj, person, job)

    expect(result).toBeInstanceOf(Object)
    expect(result).toEqual({ ...person, ...job })
    expect(result.greeting()).toBe(person.name)
  })

  it('should throw a typeError when target is not of type object', () => {
    const obj: any[] = []

    const person = {
      name: 'john',
      lastName: 'Joe',
      age: 28,
    }

    const job = {
      greeting() {
        return (this as any).name
      },
    }

    expect(() => mixin(obj, person, job)).toThrowError()
  })

  it('should throw a typeError when existis one non-object in objects', () => {
    const obj = {}

    const person = {
      name: 'john',
      lastName: 'Joe',
      age: 28,
    }

    const job = {
      greeting() {
        return (this as any).name
      },
    }

    expect(() => mixin(obj, person, job, [])).toThrowError()
  })
})
