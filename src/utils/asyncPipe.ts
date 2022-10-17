/**
 * Apply async pipeline to a value
 * @date 08/10/2022 - 16:36:26
 *
 * @template K
 * @param {...Callback<K>[]} fns Function or functions to pipeline
 * @returns {(value: any) => any} Function with value to transform
 */

export function asyncPipe<A, B>(op1: (input: A) => B): (value: A) => B

export function asyncPipe<A, B, C>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
): (value: Promise<A> | A) => Promise<C>

export function asyncPipe<A, B, C, D>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
): (value: Promise<A> | A) => Promise<D>

export function asyncPipe<A, B, C, D, E>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
): (value: Promise<A> | A) => Promise<E>

export function asyncPipe<A, B, C, D, E, F>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
): (value: Promise<A> | A) => Promise<F>

export function asyncPipe<A, B, C, D, E, F, G>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => E,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
): (value: Promise<A> | A) => Promise<G>

export function asyncPipe<A, B, C, D, E, F, G, H>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
): (value: Promise<A> | A) => Promise<H>

export function asyncPipe(...operations: readonly ((input: any) => any)[]) {
  return (value: any | Promise<any>) =>
    operations.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      }
      return fn(acc as Awaited<Promise<any>>)
    }, value)
}
