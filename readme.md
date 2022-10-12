# Motivation

This package was inspired in Functional Programming Paradigm and consists of utility small functions to resolve simple and complex problems.

## log(...args)

Used to log any value. This is a shorthand to <b>console.log</b>.

<ul>
  <li>
    <b>...args</b>:
    One or more values to print
  </li>
</ul>

```js
import { log } from '@cahmoraes93/utils'

log(1)
//=> 1

log('hello', 'world')
//=> hello world
```

## path(Module, 'pathString')

Used to get internal properties at arrays and objects.

<ul>
  <li>
    <b>Module</b>:
    Data Structure: Array or Object.
  </li>
  <li>
    <b>pathString</b>:
    Representational string to the path of value in Module parameter.
  </li>
</ul>

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

<ul>
  <li>
    <b>function</b>:
    A callback function to memoize.
  </li>
</ul>

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

## partialize(function, ...args)

Used to apply pattern partial application.
Partialize receives a function to partialize, and args to apply and return a new partial function. This patterns is used to obtain the lazy evaluation.

<ul>
  <li>
    <b>function</b>:
    A callback function to partialize.
  </li>
  <li>
    <b>args</b>:
    Parameters of function that will partialize.
  </li>
</ul>

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

## pipeline(...fns)(value)

Used to apply pipeline in a value.
Pipeline implements the composition principle of mathematical, where you can compose functions to create a new function, like this example:

<pre>h = f . g = f(g(x)).</pre>

Each function in pipeline should receive the value passed from previous function, that is mapped by the others functions in pipeline.

<b>This pipeline function not working with Promises. To this, use asyncPipeline function.</b>

This transformation occurs from the left to right.

<ul>
  <li>
    <b>fns</b>:
    One or more callback function to transform the value in pipeline.
  </li>
  <li>
    <b>value</b>:
    Value to will be transform at the pipeline.
  </li>
</ul>

```js
import { pipeline, log } from '@cahmoraes93/utils'

const double = (n1) => n1 * 2
const triple = (n1) => n1 * 3

const transformValue = pipeline(double, triple)
const result = transformValue(3)

log(result)
//=> 18
```

## asyncPipeline(...fns)(value)

Used to apply async pipeline in a value. It's a async version of pipeline function, however it's work with Promises.
Each function in pipeline should receive the value passed from previous function, that is mapped by the others functions in pipeline.

This transformation occurs from the left to right.

<ul>
  <li>
    <b>fns</b>:
    One or more callback function to transform the value in pipeline.
  </li>
  <li>
    <b>value</b>:
    Value to will be transform at the pipeline.
  </li>
</ul>

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

<ul>
  <li>
    <b>element</b>:
    Element to check type.
  </li>
</ul>

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

<ul>
  <li>
    <b>element</b>:
    Element to check if is primitive.
  </li>
</ul>

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

<ul>
  <li>
    <b>function</b>:
    Function to apply curry pattern.
  </li>
</ul>

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

## debounce(callback, milliseconds = 200)

Used to implements debounce pattern.
This pattern schedules a task to fire in the future after a specified time. It guarantees that any call to the same function during this interval, the previous schedule will be canceled and a new schedule of the callback function will be made to fire after the scheduled time.

Debounce pattern ensures that your code only fires once for each user input. Search box suggestions, automatic text box saves, and elimination of button double clicks are all use cases for debounce.

<ul>
  <li>
    <b>callback</b>:
    callback function that will be fired after only milliseconds quantity.
  </li>
  <li>
    <b>milliseconds</b>:
    milliseconds quantity that the callback will got wait until triggered.
  </li>
</ul>

```js
import { debounce, log } from '@cahmoraes93/utils'

const doThing = () => {
  log('hi!!')
}

const callback = debounce(doThing, 300)
// the second parameter is optional. Default is 200

callback() // <- this function will be cancelled
callback() // <- this function will be cancelled
callback() // <- this function will be cancelled
callback() // <- only this function will be called after 300 milliseconds
//=> hi!!
```

## takeUntil(callback, times = infinity)

Used to create a function that can be called a certain number of times. If the number of calls is greater than the configured number of times, the undefined value will be returned.

This function guarantees that your function will only be called a certain number of times. By default it can be activated infinite times.

<ul>
  <li>
    <b>callback</b>:
    callback function that will be fired a certain number of times.
  </li>
  <li>
    <b>times</b>:
    Number of times the callback can be triggered
  </li>
</ul>

```js
import { takeUntil, log } from '@cahmoraes93/utils'

const doThing = () => {
  log('hi!!')
}

const fn = takeUntil(doThing, 2)
// the second parameter is optional. Default is 200

fn() //=> 'hi!!'
fn() //=> 'hi!!'
fn() //=> undefined
fn() //=> undefined
```

## deepFreeze(structure)

Used to freeze recursively Arrays, Objects, Maps and Sets structures.
This function not creates a clone of structure passed by parameter.

This function use Object.freeze recursively in the structure param.
To creates a deep clone with immutability, use:

<pre>npm i @cahmoraes93/simple-immuter@latest</pre>

<ul>
  <li>
    <b>structure</b>:
    Array, Map, Set or Object Structure to realize deep freeze.
  </li>
</ul>

```js
import { deepFreeze, log } from '@cahmoraes93/utils'

const user = {
  name: 'John Doe',
  age: 29,
  address: {
    street: 'Baker',
    number: null,
  },
  books: ['sapiens'],
}

const isFrozen = (obj) => Object.isFrozen(obj)

deepFreeze(user)

log(isFrozen(user))
//=> true
log(isFrozen(user.address))
//=> true
log(isFrozen(user.books))
//=> true

user.books.push('Rápido e Devagar - Duas Formas de Pensar')

log(user.books)
//=> ['sapiens']
```
