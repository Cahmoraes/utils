/**
 * Apply pipeline to a value
 * @date 08/10/2022 - 16:35:18
 *
 * @param {...operations[]} operations Function or functions to pipeline
 * @returns {<T>(value: any) => any} Function with value to transform
 */

import { pipe } from './pipe'

export function createPipe<A, B>(op1: (input: A) => B): (value: A) => B

export function createPipe<A, B, C>(
  op1: (input: A) => B,
  op2: (input: B) => C,
): (value: A) => C

export function createPipe<A, B, C, D>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
): (value: A) => D

export function createPipe<A, B, C, D, E>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
): (value: A) => E

export function createPipe<A, B, C, D, E, F>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
): (value: A) => F

export function createPipe<A, B, C, D, E, F, G>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
): (value: A) => G

export function createPipe<A, B, C, D, E, F, G, H>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
): (value: A) => H

export function createPipe<A, B, C, D, E, F, G, H, I>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
  op8: (input: H) => I,
): (value: A) => I

export function createPipe<A, B, C, D, E, F, G, H, I, J>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
  op8: (input: H) => I,
  op9: (input: I) => J,
): (value: A) => J

export function createPipe<A, B, C, D, E, F, G, H, I, J, K>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
  op8: (input: H) => I,
  op9: (input: I) => J,
  op10: (input: J) => K,
): (value: A) => K

export function createPipe(...operations: ((input: any) => any)[]) {
  return (value: any) => (pipe as any)(value, ...operations)
}
