/**
 * Resolve internal Objects and Arrays paths. Return null when path not exists.
 * @date 08/10/2022 - 16:32:10
 *
 * @template T
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
 * @param {...CallableFunction[]} fns Function or functions to pipeline
 * @returns {<T>(value: T) => any} Function with value to transform
 */
declare const pipeline: (...fns: CallableFunction[]) => <T>(value: T) => T;

declare type Callback<T> = (value: T) => T | Promise<T>;
/**
 * Apply async pipeline to a value
 * @date 08/10/2022 - 16:36:26
 *
 * @template K
 * @param {...Callback<K>[]} fns Function or functions to pipeline
 * @returns {(value: any) => any} Function with value to transform
 */
declare const asyncPipeline: <K>(...fns: Callback<K>[]) => (value: K | Promise<K>) => K | Promise<K>;

declare type MemoizedFn<T> = T & {
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

declare type PartialFunction<T> = (...args: any[]) => T;
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
declare const typeOf: (elementToCheck: unknown) => any;

/**
 * Check if element is a primitive type
 * @date 04/10/2022 - 21:10:18
 *
 * @param {unknown} element Element to check
 * @returns {boolean} True => primitive | False => not primitive
 */
declare const isPrimitive: (element: unknown) => boolean;

declare type Func$2<T extends any[]> = (...args: T) => any;
declare const curry: (fn: Func$2<any>) => Func$2<any[]>;

declare type Func$1<TS extends any[], R> = (...args: TS) => R;
/**
 * This function implements debounce pattern
 * @date 11/10/2022 - 14:40:38
 *
 * @param {Func<any[], any>} fn Function to apply debounce
 * @param {number} [milliseconds=200] Time in milliseconds to schedule a function call
 * @returns {(...args: {}) => void} Function with debounce pattern
 */
declare const debounce: (fn: Func$1<any[], any>, milliseconds?: number) => (...args: unknown[]) => void;

declare type Func<T> = (...args: any[]) => T;
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
 * @returns {T} freezed data
 */
declare const deepFreeze: <T extends object>(data: T) => T;

export { asyncPipeline, curry, debounce, deepFreeze, isPrimitive, log, memo, partialize, path, pipeline, takeUntil, typeOf };
