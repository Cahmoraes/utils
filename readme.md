# Motivation

This package was inspired by the Functional Programming Paradigm and consists of small utility functions to resolve simple and complex problems.

<br>
<br>

# log

```ts
- log(...args: any[])
```

Used to log any value. This is a shorthand to <b>console.log</b>.

**args**:
One or more values to print

```js
import { log } from '@cahmoraes93/utils'

log(1)
//=> 1

log('hello', 'world')
//=> hello world
```

<br>

# path

```ts
- path(Module: any, aPath: string)
```

It is used to get internal properties of arrays and objects. If within the path string, any property returns null or undefined, null will be returned from the path function. This function facilitates internal navigation between properties with high levels of nesting.

This function prevents an error from being raised when trying to access a property with a null or undefined value.

**Module**: data Structure: Array or Object.

**aPath**: a string that represents the path of the value in a module parameter.

```js
import { path, log } from '@cahmoraes93/utils'

const obj = {
  address: {
    street: 'Baker',
  },
  hobbies: ['books', 'games'],
  phone: {
    mobile: {
      0: '998945613',
      1: '998955547',
    },
  },
}

const address = path(obj, 'address')

log(address)
//=> address: { street: 'Baker' }

const street = path(obj, 'address.street')

log(street)
//=> Baker

const mobile = path(obj, 'phone.mobile.0')

log(mobile)
//=> 998945613

const nothing_1 = path(obj, 'phone.nothing.mobile.0')

log(nothing_1)
//=> null

const hobby = path(obj, 'hobbies.0')

log(hobby)
//=> books

const nothing_2 = path(obj, 'nothing')

log(nothing_2)
//=> null
```

<br>

# memo

```ts
- memo(function: Function)
```

Used to memo a value of a pure function. This function implements the memo pattern.
To clear the cache, call the clear method.

**function**:
A callback function to memoize.

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

<br>

# partialize

```ts
- partialize(function: Function, ...args: any[]): Function
```

Used to apply a pattern of partial application.
Partialize receives a function to partialize and args to apply and return a new partial function. This pattern is used to obtain a lazy evaluation.

**function**: a callback function to partialize.

**args**: parameters of the function that will be partialized.

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

<br>

# createPipe

```ts
- createPipe(...operations: ((value: any) => any)[])(value: any): any
```

Used to create a pipeline in a value
Pipe implements the composition principle of mathematics, where you can compose functions to create a new function, like in this example:

<pre>h = f . g = f(g(x)).</pre>

Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.
<b>This pipe function is not working with promises. For this, use the asyncPipe function.</b>

This transformation occurs from left to right.

**operations**: one or more callback functions (operations) to transform the value in the pipeline.

**value**: value that will be transform at the pipeline.

```js
import { createPipe, log } from '@cahmoraes93/utils'

const double = (n1) => n1 * 2
const triple = (n1) => n1 * 3

const transformValue = createPipe(double, triple)
const result = transformValue(3)

log(result)
//=> 18
```

<br>

# createAsyncPipe

```ts
- createAsyncPipe(...operations: ((value: any) => Promise<any>)[])(value: Promise<any>): Promise<any>
```

used to create an async pipeline to a value. It's an async version of the createPipe function, but it works with promises.
Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.

This transformation occurs from left to right.

**operations**: one or more callback functions to transform the value in the pipeline.

**value**: value to be transformed in the pipeline

```js
import { createAsyncPipe, log } from '@cahmoraes93/utils'

const double = (n1) => Promise.resolve(n1 * 2)
const triple = (n1) => Promise.resolve(n1 * 3)

const transformValue = createAsyncPipe(double, triple)
const result = await transformValue(Promise.resolve(3))

log(result)
//=> 18
```

<br>

# typeOf

```ts
- typeOf(element: any): string
```

used to check the data type of a given element.
This function recognizes the difference between null and an object.
Return a representational string of a given data type.

**element**: element type to check.

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

<br>

# isPrimitive

```ts
- isPrimitive(element: any): boolean
```

Used to check if a given data type is a primitive or non-primitive data type.

**element**: element to check if it is primitive.

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

<br>

# curry

```ts
- curry(function: (args: any) => any): Function
```

Used to create curried functions.
Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
The Curry function doesn’t call a function. It just transforms it.

**function**: function that to apply curry pattern.

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

<br>

# debounce

```ts
- debounce(callback: () => void, milliseconds: number = 200): Function
```

Used to implement a debounce pattern.
This pattern schedules a task to fire in the future after a specified time. It guarantees that any call to the same function during this interval will be canceled, and a new schedule for the callback function will be fired after the scheduled time.

The debouncing pattern ensures that your code only fires once for each user input. Search box suggestions, automatic text box saves, and the elimination of button double clicks are all use cases for debounce.

**callback**: callback function that will be fired after only milliseconds.

**milliseconds**: The milliseconds quantity that callback will wait until triggered.

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

<br>

# takeUntil

```ts
- takeUntil(callback: () => void, times: number = infinity): Function
```

Used to create a function that can be called a certain number of times. If the number of calls is greater than the configured number of times, the undefined value will be returned.

This function guarantees that your function will only be called a certain number of times. By default, it can be activated infinite times.

**callback**: callback function will be fired a certain number of times.

**times**: number of times the function can be called

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

<br>

# deepFreeze

```ts
- deepFreeze(structure: any): any
```

It is used to recursively freeze arrays, objects, maps, and structures sets.
This function does not create a clone of the structure passed by parameter.

This function use Object.freezes recursively in the structure param.
To create a deep clone with immutability, use:

<pre>npm i @cahmoraes93/simple-immuter@latest</pre>

**structure**: Array, Map, Set, or Object Structure to realize Deep Freeze.

<br>

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

<br>

# mixin

```ts
- mixin(target: any, ...objects: any[]): any
```

Used to apply the mixin pattern.
This pattern is used to compose multiple objects into a target object.

<br>

**target**: target-object to receive the objects' properties.

**objects**: in target-object, one or more objects must be composed.

```js
import { mixin, log } from '@cahmoraes93/utils'

const user = {
  name: 'John Doe',
  age: 29,
  address: {
    street: 'Baker',
    number: null,
  },
}

const job = {
  greeting() {
    return `Hello, my name's ${this.name}`
  },
}

const result = mixin(user, job, { hobbies: ['books'] })

log(result)
/*
{
  name: 'John Doe',
  age: 29,
  address: {
    street: 'Baker',
    number: null,
  },
  greeting() {
    return `Hello, my name's ${this.name}`
  },
  hobbies: ['books']
}
*/

log(result.greeting())
//=> Hello, my name's John Doe
```

<br>

# pipe

```ts
- pipe(value: any, ...operations: ((value: any) => any)[]): any
```

Used to transform a value by a pipeline.

Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.
<b>This pipe function is not working with promises. For this, use the asyncPipe function.</b>

This transformation occurs from left to right.

<br>

**value**: value that will be transform at the pipeline.

**operations**: One or more callback functions (operations) to transform the value in the pipeline.

```js
import { pipe, log } from '@cahmoraes93/utils'

const double = (n1) => n1 * 2
const triple = (n1) => n1 * 3

const result = pipe(3, double, triple)

log(result)
//=> 18
```

<br>

# asyncPipe

```ts
- asyncPipe(value: any, ...operations: ((value: any) => Promise<any>)[]): Promise<any>
```

Used to transform a value by an async pipeline. It's an async version of the pipe function, but it works with promises.
Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.

This transformation occurs from left to right.

<br>

**value**: value to be transformed in the pipeline

**operations**: One or more callback functions to transform the value in the pipeline.

```js
import { asyncPipe, log } from '@cahmoraes93/utils'

const double = (n1) => Promise.resolve(n1 * 2)
const triple = (n1) => Promise.resolve(n1 * 3)

const transformValue = await asyncPipe(Promise.resolve(3), double, triple)

log(result)
//=> 18
```

<br>

# checkInterface

```ts
- checkInterface<Interface>(anObject: any, ...keys: string[]): boolean
```

Check if a given object is type of an interface.

<br>

**Interface**: interface to be check. This type parameter is used to ensure the intellisense.

**anObject**: an object to check.

**keys**: keys from interface to match in object.

```ts
import { checkInterface, log } from '@cahmoraes93/utils'

interface IProduct {
  name: string
  price: number
}

const anProductSample: Product = {
  name: 'book',
  price: 18.99,
}

const isProduct = checkInterface<IProduct>(anProductSample, 'name', 'price')
log(isProduct) //=> true

const aNotProductSample = {
  name: 'book',
}

const nonProduct = checkInterface<IProduct>(aNotProductSample, 'name', 'price')

log(nonProduct) //=> false
```
