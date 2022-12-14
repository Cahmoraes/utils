/**
 * Apply async pipeline to a value
 * @date 18/10/2022 - 10:23:41
 *
 * @param {A} value Value that will transformed by pipeline
 * @param {...operations[]} operations Function or functions to pipeline
 * @returns Value transformed by asyncPipeline
 */

export function asyncPipe<A, B>(value: Promise<A> | A, op1: (input: A) => B): B

export function asyncPipe<A, B, C>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
): Promise<C>

export function asyncPipe<A, B, C, D>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
): Promise<D>

export function asyncPipe<A, B, C, D, E>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
): Promise<E>

export function asyncPipe<A, B, C, D, E, F>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
): Promise<F>

export function asyncPipe<A, B, C, D, E, F, G>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => E,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
): Promise<G>

export function asyncPipe<A, B, C, D, E, F, G, H>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
): Promise<H>

export function asyncPipe<A, B, C, D, E, F, G, H, I>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
  op8: (input: H) => Promise<I>,
): Promise<I>

export function asyncPipe<A, B, C, D, E, F, G, H, I, J>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
  op8: (input: H) => Promise<I>,
  op9: (input: I) => Promise<J>,
): Promise<J>

export function asyncPipe<A, B, C, D, E, F, G, H, I, J, K>(
  value: Promise<A> | A,
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
  op8: (input: H) => Promise<I>,
  op9: (input: I) => Promise<J>,
  op10: (input: J) => Promise<K>,
): Promise<K>

export function asyncPipe(
  value: any | Promise<any>,
  ...operations: readonly ((input: any) => any)[]
) {
  return operations.reduce(async (acc, fn) => {
    if (Promise.resolve(acc) === acc) {
      return fn(await acc)
    }
    return fn(acc as Awaited<Promise<any>>)
  }, value)
}
