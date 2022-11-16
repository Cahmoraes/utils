import { describe, it, expect } from '@jest/globals'
import { checkInterface } from '../src'

interface Product {
  name: string
  price: number
}

describe('checkInterface test suite', () => {
  it('should return true when a value matches an interface', () => {
    const aProductSample: Product = {
      name: 'book',
      price: 18.99,
    }

    const isProduct = checkInterface<Product>(aProductSample, 'name', 'price')

    expect(isProduct).toBeTruthy()
  })

  it('should return false when a value not matches an interface', () => {
    const aNotProductSample = {
      name: 'book',
    }

    const isProduct = checkInterface<Product>(
      aNotProductSample,
      'name',
      'price',
    )

    expect(isProduct).toBeFalsy()
  })
})
