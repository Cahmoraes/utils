/**
 * Resolve internal Objects and Arrays paths. Return null when path not exists.
 * @date 08/10/2022 - 16:32:10
 *
 * @param {unknown} module - Object or Array
 * @param {string} pathString Path to property: 'addresses.0.street'
 * @returns {(T | null)} Existing property or null if none
 */
declare const path: <T>(module: unknown, pathString: string) => T | null;

/**
 * Log values
 * @date 08/10/2022 - 16:27:16
 *
 * @param {...unknown[]} args Parameters to log
 */
declare const log: (...args: unknown[]) => void;

/**
 * Apply pipeline to a value
 * @date 08/10/2022 - 16:35:18
 *
 * @param {...operations[]} operations Function or functions to pipeline
 * @returns {<T>(value: any) => any} Function with value to transform
 */
declare function createPipe<A, B>(op1: (input: A) => B): (value: A) => B;
declare function createPipe<A, B, C>(op1: (input: A) => B, op2: (input: B) => C): (value: A) => C;
declare function createPipe<A, B, C, D>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D): (value: A) => D;
declare function createPipe<A, B, C, D, E>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E): (value: A) => E;
declare function createPipe<A, B, C, D, E, F>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F): (value: A) => F;
declare function createPipe<A, B, C, D, E, F, G>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G): (value: A) => G;
declare function createPipe<A, B, C, D, E, F, G, H>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H): (value: A) => H;
declare function createPipe<A, B, C, D, E, F, G, H, I>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H, op8: (input: H) => I): (value: A) => I;
declare function createPipe<A, B, C, D, E, F, G, H, I, J>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H, op8: (input: H) => I, op9: (input: I) => J): (value: A) => J;
declare function createPipe<A, B, C, D, E, F, G, H, I, J, K>(op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H, op8: (input: H) => I, op9: (input: I) => J, op10: (input: J) => K): (value: A) => K;

/**
 * Create Apply async pipeline to a value
 * @date 08/10/2022 - 16:36:26
 *
 * @template K
 * @param {...Callback<K>[]} fns Function or functions to pipeline
 * @returns {(value: any) => any} Function with value to transform
 */
declare function createAsyncPipe<A, B>(op1: (input: A) => B): (value: Promise<A> | A) => B;
declare function createAsyncPipe<A, B, C>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>): (value: Promise<A> | A) => Promise<C>;
declare function createAsyncPipe<A, B, C, D>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>): (value: Promise<A> | A) => Promise<D>;
declare function createAsyncPipe<A, B, C, D, E>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>): (value: Promise<A> | A) => Promise<E>;
declare function createAsyncPipe<A, B, C, D, E, F>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>): (value: Promise<A> | A) => Promise<F>;
declare function createAsyncPipe<A, B, C, D, E, F, G>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => E, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>): (value: Promise<A> | A) => Promise<G>;
declare function createAsyncPipe<A, B, C, D, E, F, G, H>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>): (value: Promise<A> | A) => Promise<H>;
declare function createAsyncPipe<A, B, C, D, E, F, G, H, I>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>, op8: (input: H) => Promise<I>): (value: Promise<A> | A) => Promise<I>;
declare function createAsyncPipe<A, B, C, D, E, F, G, H, I, J>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>, op8: (input: H) => Promise<I>, op9: (input: I) => Promise<J>): (value: Promise<A> | A) => Promise<J>;
declare function createAsyncPipe<A, B, C, D, E, F, G, H, I, J, K>(op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>, op8: (input: H) => Promise<I>, op9: (input: I) => Promise<J>, op10: (input: J) => Promise<K>): (value: Promise<A> | A) => Promise<K>;

type MemoizedFn<T> = T & {
    clear: () => void;
};
/**
 * Apply patterns memoization to a function
 * @date 08/10/2022 - 16:29:04
 *
 * @param {K} fn Function to apply memoization
 * @returns {MemoizedFn<ReturnType<Callback<K>>>} Memoized function
 */
declare const memo: <K>(fn: K) => MemoizedFn<K>;

type PartialFunction<T> = (...args: any[]) => T;
/**
 * Apply pattern Partial Application
 * @date 08/10/2022 - 16:30:22
 *
 * @param {PartialFunction<T>} fn Function to apply partial application
 * @param {...any[]} args args to apply in the Partial Function
 * @returns {PartialFunction<T>} Partial Function
 */
declare const partialize: <T>(fn: PartialFunction<T>, ...args: any[]) => PartialFunction<T>;

/**
 * Return a representational string of a given data type
 * @date 08/10/2022 - 17:20:28
 *
 * @param {unknown} elementToCheck Element to check type
 * @returns {String} type of element
 */
declare const typeOf: (elementToCheck: unknown) => string;

/**
 * Check if element is a primitive type
 * @date 04/10/2022 - 21:10:18
 *
 * @param {unknown} element Element to check
 * @returns {boolean} True => primitive | False => not primitive
 */
declare const isPrimitive: (element: unknown) => boolean;

type Func$2<TS extends any[], R> = (...args: TS) => R;
interface Curry {
    <A, R>(func: (arg: A) => R): CurriedFunction1<A, R>;
    <A1, A2, R>(func: (arg1: A1, arg2: A2) => R): CurriedFunction2<A1, A2, R>;
    <A1, A2, A3, R>(func: (arg1: A1, arg2: A2, arg3: A3) => R): CurriedFunction3<A1, A2, A3, R>;
    (func: Func$2<any[], any>): Func$2<any[], any>;
}
interface CurriedFunction1<A, R> {
    (): CurriedFunction1<A, R>;
    (arg: A): R;
}
interface CurriedFunction2<A1, A2, R> {
    (): CurriedFunction2<A1, A2, R>;
    (arg1: A1): CurriedFunction1<A2, R>;
    (arg1: '_', arg2: A2): CurriedFunction1<A1, R>;
    (arg1: A1, arg2: A2): R;
}
interface CurriedFunction3<A1, A2, A3, R> {
    (): CurriedFunction3<A1, A2, A3, R>;
    (arg1: A1): CurriedFunction2<A1, A2, R>;
    (arg1: '_', arg2: A2): CurriedFunction1<A1, R>;
    (arg1: A1, arg2: A2): CurriedFunction3<A1, A2, A3, R>;
    (arg1: A1, arg2: A2, arg3: A3): R;
}
declare const curry: Curry;

type Func$1<TS extends any[], R> = (...args: TS) => R;
/**
 * This function implements debounce pattern
 * @date 11/10/2022 - 14:40:38
 *
 * @param {Func<any[], any>} fn Function to apply debounce
 * @param {number} [milliseconds=200] Time in milliseconds to schedule a function call
 * @returns {(...args: {}) => void} Function with debounce pattern
 */
declare const debounce: (fn: Func$1<any[], any>, milliseconds?: number) => (...args: unknown[]) => void;

type Func<T> = (...args: any[]) => T;
/**
 * Create a function that can be called a certain number of times. If the number of calls is greater than the configured number of times, the undefined value will be returned.
 * @date 11/10/2022 - 14:42:51
 *
 * @template T
 * @param {Func<T>} fn Function that will be called
 * @param {*} [until=Infinity] Quantity of numbers that function can be called
 * @returns {(...args: {}) => Func<T>} Configured Function with takeUntil
 */
declare const takeUntil: <T>(fn: Func<T>, until?: number) => (...args: unknown[]) => Func<T> | undefined;

/**
 * freeze recursively arrays and object structures
 * @date 11/10/2022 - 14:39:31
 *
 * @param {T} data Array or Object Structure
 * @returns {Readonly<T>} freezed data
 */
declare const deepFreeze: <T extends object>(data: T) => Readonly<T>;

declare const mixin: <TResult = any>(target: any, ...objects: any[]) => TResult;

/**
 * Apply pipeline to a value
 * @date 18/10/2022 - 10:23:41
 *
 * @param {A} value Value that will transformed by pipeline
 * @param {...operations[]} operations Function or functions to pipeline
 * @returns Value transformed by pipeline
 */
declare function pipe<A, B>(value: A, op1: (input: A) => B): B;
declare function pipe<A, B, C>(value: A, op1: (input: A) => B, op2: (input: B) => C): C;
declare function pipe<A, B, C, D>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D): D;
declare function pipe<A, B, C, D, E>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E): E;
declare function pipe<A, B, C, D, E, F>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F): F;
declare function pipe<A, B, C, D, E, F, G>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G): G;
declare function pipe<A, B, C, D, E, F, G, H>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H): H;
declare function pipe<A, B, C, D, E, F, G, H, I>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H, op8: (input: H) => I): I;
declare function pipe<A, B, C, D, E, F, G, H, I, J>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H, op8: (input: H) => I, op9: (input: I) => J): J;
declare function pipe<A, B, C, D, E, F, G, H, I, J, K>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H, op8: (input: H) => I, op9: (input: I) => J, op10: (input: J) => K): K;

/**
 * Apply async pipeline to a value
 * @date 18/10/2022 - 10:23:41
 *
 * @param {A} value Value that will transformed by pipeline
 * @param {...operations[]} operations Function or functions to pipeline
 * @returns Value transformed by asyncPipeline
 */
declare function asyncPipe<A, B>(value: Promise<A> | A, op1: (input: A) => B): B;
declare function asyncPipe<A, B, C>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>): Promise<C>;
declare function asyncPipe<A, B, C, D>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>): Promise<D>;
declare function asyncPipe<A, B, C, D, E>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>): Promise<E>;
declare function asyncPipe<A, B, C, D, E, F>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>): Promise<F>;
declare function asyncPipe<A, B, C, D, E, F, G>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => E, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>): Promise<G>;
declare function asyncPipe<A, B, C, D, E, F, G, H>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>): Promise<H>;
declare function asyncPipe<A, B, C, D, E, F, G, H, I>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>, op8: (input: H) => Promise<I>): Promise<I>;
declare function asyncPipe<A, B, C, D, E, F, G, H, I, J>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>, op8: (input: H) => Promise<I>, op9: (input: I) => Promise<J>): Promise<J>;
declare function asyncPipe<A, B, C, D, E, F, G, H, I, J, K>(value: Promise<A> | A, op1: (input: A) => Promise<B>, op2: (input: B) => Promise<C>, op3: (input: C) => Promise<D>, op4: (input: D) => Promise<E>, op5: (input: E) => Promise<F>, op6: (input: F) => Promise<G>, op7: (input: G) => Promise<H>, op8: (input: H) => Promise<I>, op9: (input: I) => Promise<J>, op10: (input: J) => Promise<K>): Promise<K>;

/**
 * Check if object is type of Interface in Type Parameter
 * @date 16/11/2022 - 19:20:18
 *
 * @export
 * @template Interface - Interface to check
 * @param {unknown} anObj - Object to check
 * @param {...(keyof Interface)[]} keys - keys of interface to check in object
 * @returns {anObj is Interface}
 */
declare function checkInterface<Interface>(anObj: unknown, ...keys: (keyof Interface)[]): anObj is Interface;

export { asyncPipe, checkInterface, createAsyncPipe, createPipe, curry, debounce, deepFreeze, isPrimitive, log, memo, mixin, partialize, path, pipe, takeUntil, typeOf };
