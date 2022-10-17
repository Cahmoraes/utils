/**
 * Apply pipeline to a value
 * @date 08/10/2022 - 16:35:18
 *
 * @param {...operations[]} operations Function or functions to pipeline
 * @returns {<T>(value: any) => any} Function with value to transform
 */

export function pipe<A, B>(op1: (input: A) => B): (value: A) => B

export function pipe<A, B, C>(
  op1: (input: A) => B,
  op2: (input: B) => C,
): (value: A) => C

export function pipe<A, B, C, D>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
): (value: A) => D

export function pipe<A, B, C, D, E>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
): (value: A) => E

export function pipe<A, B, C, D, E, F>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
): (value: A) => F

export function pipe<A, B, C, D, E, F, G>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
): (value: A) => G

export function pipe<A, B, C, D, E, F, G, H>(
  op1: (input: A) => B,
  op2: (input: B) => C,
  op3: (input: C) => D,
  op4: (input: D) => E,
  op5: (input: E) => F,
  op6: (input: F) => G,
  op7: (input: G) => H,
): (value: A) => H

export function pipe(...operations: readonly ((input: any) => any)[]) {
  return (value: any) => operations.reduce((acc, fn) => fn(acc), value)
}
