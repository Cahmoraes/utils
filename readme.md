# Motivation

This package was inspired in Functional Programming Paradigm and consists of utility small functions to resolve simple and complex problems.

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

log(sum1To(2))
//=> 3

const concatStrings = (arg1, arg2, arg3) => `${arg1 + arg2 + arg3}`

const myNameIs = partialize(concatStrings, 'My name ', 'is ')

log(myNameIs('Bond')) // My name is Bond
```

## pipeline(fn1, fn2, fn3, ...fns)(value)

Used to apply pipeline in a value.
Pipeline implements the composition principle of mathematical, where you can compose functions to create a new function, like this example:

<pre>h = f . g = f(g(x)).</pre>

Each function in pipeline should receive the value passed from previous function, that is mapped by the others functions in pipeline.

<b>This pipeline function not working with Promises. To this, use asyncPipeline function.</b>

This transformation occurs from the left to right.

```js
import { pipeline, log } from '@cahmoraes93/utils'

const double = (n1) => n1 * 2
const triple = (n1) => n1 * 3

const transformValue = pipeline(double, triple)
const result = transformValue(3)

log(result)
//=> 18
```

## asyncPipeline(fn1, fn2, fn3, ...fns)(value)

Used to apply async pipeline in a value. It's a async version of pipeline function, however it's work with Promises.
Each function in pipeline should receive the value passed from previous function, that is mapped by the others functions in pipeline.

This transformation occurs from the left to right.

```js
import { asyncPipeline, log } from '@cahmoraes93/utils'

const double = (n1) => Promise.resolve(n1 * 2)
const triple = (n1) => Promise.resolve(n1 * 3)

const transformValue = asyncPipeline(double, triple)
const result = await transformValue(Promise.resolve(3))

log(result)
//=> 18
```

## typeOf(element)

Used to check data type of a given element.
this function recognizes the difference between null and object.
Return a representational string of a given data type.

This transformation occurs from the left to right.

```js
import { typeOf, log } from '@cahmoraes93/utils'

log(typeOf(null))
//=> null
log(typeof null) // using typeof native operator
//=> object
log(typeOf({}))
//=> object
log(typeOf(() => {}))
//=> function
log(typeOf('this is a string'))
//=> string
log(typeOf(0))
//=> number
log(typeOf(undefined))
//=> undefined
```

## isPrimitive(element)

Used to check if a given data type, is a primitive or non-primitive data type.

```js
import { isPrimitive, log } from '@cahmoraes93/utils'

log(isPrimitive(null))
//=> true
log(isPrimitive({}))
//=> false
log(isPrimitive(() => {}))
//=> false
log(isPrimitive('this is a string'))
//=> true
log(isPrimitive(0))
//=> true
log(isPrimitive(undefined))
//=> true
```

## curry(function)

Used to create curried functions.
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
The Curry function doesn’t call a function. It just transforms it.

```js
import { curry, log } from '@cahmoraes93/utils'

const sum = (a, b, c) => {
  return a + b + c
}

const curriedSum = curry(sum)

log(curriedSum(1, 2, 3))
//=> 6, still callable normally
log(curriedSum(1)(2, 3))
//=> 6, currying of 1st arg
log(curriedSum(1)(2)(3))
//=> 6, full currying
```
