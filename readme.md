# Motivation

This package was inspired by the Functional Programming Paradigm and consists of small utility functions to resolve simple and complex problems.

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

It is used to get internal properties of arrays and objects. If within the path string, any property returns null or undefined, null will be returned from the path function. This function facilitates internal navigation between properties with high levels of nesting.

This function prevents an error from being raised when trying to access a property with a null or undefined value.

<ul>
  <li>
    <b>Module</b>:
    Data Structure: Array or Object
  </li>
  <li>
    <b>pathString</b>:
    A string that represents the path of the value in a module parameter.
  </li>
</ul>

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

## memo(function)

Used to memo a value of a pure function. This function implements the memo pattern.
To clear the cache, call the clear method.

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

Used to apply a pattern of partial application.
Partialize receives a function to partialize and args to apply and return a new partial function. This pattern is used to obtain a lazy evaluation.

<ul>
  <li>
    <b>function</b>:
    A callback function to partialize.
  </li>
  <li>
    <b>args</b>:
    Parameters of the function that will be partialized.
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

## createPipe(...operations)(value)

Used to create a pipeline in a value
Pipe implements the composition principle of mathematics, where you can compose functions to create a new function, like in this example:

<pre>h = f . g = f(g(x)).</pre>

Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.
<b>This pipe function is not working with promises. For this, use the asyncPipe function.</b>

This transformation occurs from left to right.

<ul>
  <li>
    <b>operations</b>:
    One or more callback functions (operations) to transform the value in the pipeline.
  </li>
  <li>
    <b>value</b>:
    Value that will be transform at the pipeline.
  </li>
</ul>

```js
import { createPipe, log } from '@cahmoraes93/utils'

const double = (n1) => n1 * 2
const triple = (n1) => n1 * 3

const transformValue = createPipe(double, triple)
const result = transformValue(3)

log(result)
//=> 18
```

## createAsyncPipe(...operations)(value)

used to create an async pipeline to a value. It's an async version of the createPipe function, but it works with promises.
Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.

This transformation occurs from left to right.

<ul>
  <li>
    <b>operations</b>:
    One or more callback functions to transform the value in the pipeline.
  </li>
  <li>
    <b>value</b>:
    value to be transformed in the pipeline 
  </li>
</ul>

```js
import { createAsyncPipe, log } from '@cahmoraes93/utils'

const double = (n1) => Promise.resolve(n1 * 2)
const triple = (n1) => Promise.resolve(n1 * 3)

const transformValue = createAsyncPipe(double, triple)
const result = await transformValue(Promise.resolve(3))

log(result)
//=> 18
```

## typeOf(element)

used to check the data type of a given element.
This function recognizes the difference between null and an object.
Return a representational string of a given data type.

<ul>
  <li>
    <b>element</b>:
    Element type to check.
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

Used to check if a given data type is a primitive or non-primitive data type.

<ul>
  <li>
    <b>element</b>:
    Element to check if it is primitive.
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
    Function that to apply curry pattern.
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

Used to implement a debounce pattern.
This pattern schedules a task to fire in the future after a specified time. It guarantees that any call to the same function during this interval will be canceled, and a new schedule for the callback function will be fired after the scheduled time.

The debouncing pattern ensures that your code only fires once for each user input. Search box suggestions, automatic text box saves, and the elimination of button double clicks are all use cases for debounce.

<ul>
  <li>
    <b>callback</b>:
    callback function that will be fired after only milliseconds.
  </li>
  <li>
    <b>milliseconds</b>:
    The milliseconds quantity that callback will wait until triggered.
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

This function guarantees that your function will only be called a certain number of times. By default, it can be activated infinite times.

<ul>
  <li>
    <b>callback</b>:
    A callback function will be fired a certain number of times.
  </li>
  <li>
    <b>times</b>:
    Number of times the function can be called
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

It is used to recursively freeze arrays, objects, maps, and structures sets.
This function does not create a clone of the structure passed by parameter.

This function use Object.freezes recursively in the structure param.
To create a deep clone with immutability, use:

<pre>npm i @cahmoraes93/simple-immuter@latest</pre>

<ul>
  <li>
    <b>structure</b>:
    Array, Map, Set, or Object Structure to realize Deep Freeze.
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

## mixin(target, ...objects)

Used to apply the mixin pattern.
This pattern is used to compose multiple objects into a target object.

<ul>
  <li>
    <b>target</b>:
    Target-object to receive the objects' properties.
  </li>
  <li>
    <b>objects</b>:
    In target-object, one or more objects must be composed.
  </li>
</ul>

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

## pipe(value, ...operations)

Used to transform a value by a pipeline.

Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.
<b>This pipe function is not working with promises. For this, use the asyncPipe function.</b>

This transformation occurs from left to right.

<ul>
  <li>
    <b>value</b>:
    Value that will be transform at the pipeline.
  </li>
  <li>
    <b>operations</b>:
    One or more callback functions (operations) to transform the value in the pipeline.
  </li>
</ul>

```js
import { pipe, log } from '@cahmoraes93/utils'

const double = (n1) => n1 * 2
const triple = (n1) => n1 * 3

const result = pipe(3, double, triple)

log(result)
//=> 18
```

## asyncPipe(value, ...operations)

Used to transform a value by an async pipeline. It's an async version of the pipe function, but it works with promises.
Each function in the pipeline should receive the value passed from the previous function, which is mapped by the other functions in the pipeline.

This transformation occurs from left to right.

<ul>
  <li>
    <b>value</b>:
    value to be transformed in the pipeline 
  </li>
  <li>
    <b>operations</b>:
    One or more callback functions to transform the value in the pipeline.
  </li>
</ul>

```js
import { asyncPipe, log } from '@cahmoraes93/utils'

const double = (n1) => Promise.resolve(n1 * 2)
const triple = (n1) => Promise.resolve(n1 * 3)

const transformValue = await asyncPipe(Promise.resolve(3), double, triple)

log(result)
//=> 18
```

<br>

## checkInterface\<Interface>(anObject, ...keys: string[]): boolean

Check if a given object is type of an interface.

<ul>
  <li>
    <b>Interface</b>:
    Interface to be check. This type parameter is used to ensure the intellisense.
  </li>
  <li>
    <b>anObject</b>:
    An object to check
  </li>
  <li>
    <b>keys</b>:
    Keys from interface to match in object.
  </li>
</ul>

```ts
import { checkInterface, log } from '@cahmoraes93/utils'

interface Product {
  name: string
  price: number
}

const anProductSample: Product = {
  name: 'book',
  price: 18.99,
}

const isProduct = checkInterface<Product>(anProductSample, 'name', 'price')
log(isProduct)
//=> true

const aNotProductSample = {
  name: 'book',
}

const nonProduct = checkInterface<Product>(aNotProductSample, 'name', 'price')

log(nonProduct)
//=> false
```

<br>

# Monad Either

Either is a set of functions to generate a monad, the Either monad.
Its role is to elegantly handle situations that can generate an error.

How it works: Either literally means OR one thing OR the other. You can define that a method can return some types of error or some types of success. Mistake types are on the left and success types are on the right. For example, in the case of creating an email, the method that creates the email can return InvalidEmailError OR the object of type Email successfully created. It is possible to know if the returned type was error or success by asking if it is "right" or "left". That is, if it is "left" it is a type of error, if it is "right" it is a type of success.

- **EitherType<L, R>**:
  Type alias to set a method return to Either. The type variable "L" defines the types of errors separated by pipes "|" and the type variable "R" defines the success type.

---

## Left<L, R>

Constructor function that returns an Either instance of type Left.

### properties

```ts
- value: L
  // Returns the wrapped value
```

### methods:

```ts
- isLeft(): boolean
  // Returns true when instance is type of Left
```

```ts
- isRight(): boolean
  // Returns false when instance is not type of Left
```

<br>

## Right<L, R>

Constructor function that returns an Either instance of type Right.

### properties

```ts
- value: R
  // Returns the wrapped value
```

### methods:

```ts
- isLeft(): boolean
  // Returns false when instance is type of Right
```

```ts
- isRight(): boolean
  // Returns true when instance is not type of Right
```

---

<br>

## Either.left(aValue: Left): Left<L, R>

Factory function to build an Either object of type Left.

<br>

## Either.right(aValue: Right): Right<L, R>

Factory function to build an Either object of type Right.

```ts
import { Either } from '@cahmoraes93/utils'

const randomNumber = Math.floor(Math.random() * 10)

if (randomNumber % 2 === 0) {
  return Either.left(new EvenNumberException(randomNumber))
}

return Either.right(randomNumber)
```

## Usage Example

```ts
import { Either, EitherType } from '@cahmoraes93/utils'

class InvalidEmailError extends Error {...}
class InvalidLengthError extends Error {...}

function createEmail(): EitherType<InvalidEmailError | InvalidLengthError, string> {
  const email = service.generateRandomEmail()

  if (!email.includes('@')) {
    return Either.right(
      new InvalidEmailError(`The email is too short ${email}`)
    )
  }

  if (email.length < 5) {
    return Either.left(
      new InvalidLengthError(`The email is too short ${email}`)
    )
  }

  return Either.right(email)
}

  const emailOrError = createEmail()

  if (emailOrError.isLeft()) {
    // handle the error in the best way
  }

  // a partir deste ponto o email é válido, é possível omitir a chamada de emailOrError.isRight()

  console.log(emailOrError.value)

```
