# Motivation

This package consists of utility functions.

## Usage

## path(Module, 'pathString')

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

## memo(function)

Used to memo a value of a pure function. This function implements memo pattern.
to clear the cache, call the clear method.

```js
import { memo, log } from '@cahmoraes93/utils'

const sum = (n1, n2) => n1 + n2

const memoSum = memo(sum)
log(memoSum(2, 3)) // insert this arguments and result in a internal cache
//=> 5

log(memoSum(2, 3)) // obtained from cache

memoSum.clear() // => clear cache

log(memoSum(2, 3)) // insert this arguments and result in a internal cache
log(memoSum(2, 3)) // obtained from cache
```
