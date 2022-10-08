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

declare type PartialFunction<T> = (...args: T[]) => T;
/**
 * Apply pattern Partial Application
 * @date 08/10/2022 - 16:30:22
 *
 * @param {PartialFunction<T>} fn Function to apply partial application
 * @param {...any[]} args args to apply in the Partial Function
 * @returns {PartialFunction<T>} Partial Function
 */
declare const partialize: <T>(fn: PartialFunction<T>, ...args: any[]) => PartialFunction<T>;

export { asyncPipeline, log, memo, partialize, path, pipeline };
