# Motivation

This package consists of utility functions.

## Usage

## path

Used to get internal properties at arrays and objects.

```js
import { path, log } from '@cahmoraes93/utils'

const obj = {
  address: {
    street: 'Baker',
  },
  hobbies: ['books', 'games'],
}

const address = path(obj, 'address')
log(address)
//=> address: { street: 'Baker' }

const street = path(obj, 'address.street')
log(street)
//=> Baker

const hobby = path(obj, 'hobbies.0')
log(hobby)
//=> books

const nothing = path(obj, 'nothing')
log(nothing)
//=> null
```
