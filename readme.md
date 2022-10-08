# Motivation

This package consists of utility functions.

## Usage

## log(...args)

Used to log any value. This is a shorthand to <b>console.log</b>.

```js
import { log } from '@cahmoraes93/utils'
log(1)
//=> 1
log('hello', 'world')
//=> hello world
```

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

## partialize(function, arg1, arg2, ...args)

Used to apply pattern partial application.
Partialize receives a function to partialize, and args to apply and return a new partial function. This patterns is used to obtain the lazy evaluation.

```js
import { partialize, log } from '@cahmoraes93/utils'

const sum = (n1, n2) => n1 + n2

const sum1To = partialize(sum, 1)
log(sum1To(2)) // 3
//=> 5

const concatStrings = (arg1, arg2, arg3) => `${arg1 + arg2 + arg3}`

const myNameIs = partialize(concatStrings, 'My name ', 'is ')

log(myNameIs('Bond')) // My name is Bond
```
