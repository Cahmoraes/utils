declare const path: <T>(module: unknown, pathString: string) => T | null;

declare const log: (...args: unknown[]) => void;

declare const pipeline: (...fns: CallableFunction[]) => <T>(value: T) => T;

declare type Callback<K> = <T>(value: T) => K | Promise<K>;
declare const asyncPipeline: <K>(...fns: Callback<K>[]) => (value: K | Promise<K>) => K | Promise<K>;

declare type MemoizedFn<T> = T & {
    clear: () => void;
};
declare const memo: <K>(fn: K) => MemoizedFn<K>;

declare type PartialFunction<T> = (...args: T[]) => T;
declare const partialize: <T>(fn: PartialFunction<T>, ...args: any[]) => PartialFunction<T>;

export { asyncPipeline, log, memo, partialize, path, pipeline };
