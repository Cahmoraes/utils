/**
 * Create Apply async pipeline to a value
 * @date 08/10/2022 - 16:36:26
 *
 * @template K
 * @param {...Callback<K>[]} fns Function or functions to pipeline
 * @returns {(value: any) => any} Function with value to transform
 */

import { asyncPipe } from './asyncPipe'

export function createAsyncPipe<A, B>(
  op1: (input: A) => B,
): (value: Promise<A> | A) => B

export function createAsyncPipe<A, B, C>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
): (value: Promise<A> | A) => Promise<C>

export function createAsyncPipe<A, B, C, D>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
): (value: Promise<A> | A) => Promise<D>

export function createAsyncPipe<A, B, C, D, E>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
): (value: Promise<A> | A) => Promise<E>

export function createAsyncPipe<A, B, C, D, E, F>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
): (value: Promise<A> | A) => Promise<F>

export function createAsyncPipe<A, B, C, D, E, F, G>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => E,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
): (value: Promise<A> | A) => Promise<G>

export function createAsyncPipe<A, B, C, D, E, F, G, H>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
): (value: Promise<A> | A) => Promise<H>

export function createAsyncPipe<A, B, C, D, E, F, G, H, I>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
  op8: (input: H) => Promise<I>,
): (value: Promise<A> | A) => Promise<I>

export function createAsyncPipe<A, B, C, D, E, F, G, H, I, J>(
  op1: (input: A) => Promise<B>,
  op2: (input: B) => Promise<C>,
  op3: (input: C) => Promise<D>,
  op4: (input: D) => Promise<E>,
  op5: (input: E) => Promise<F>,
  op6: (input: F) => Promise<G>,
  op7: (input: G) => Promise<H>,
  op8: (input: H) => Promise<I>,
  op9: (input: I) => Promise<J>,
): (value: Promise<A> | A) => Promise<J>

export function createAsyncPipe<A, B, C, D, E, F, G, H, I, J, K>(
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
): (value: Promise<A> | A) => Promise<K>

export function createAsyncPipe(
  ...operations: readonly ((input: any) => any)[]
) {
  return (value: any | Promise<any>) => (asyncPipe as any)(value, ...operations)
}
