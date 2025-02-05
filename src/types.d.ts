import type { Predicate } from './array/chain';

declare global {
  interface Array<T> {
    chain<T, A>(predicate: Predicate<T, A>): A;
    head<T>(): T;
    last<T>(): T | undefined;
    product(): number;
    range(from: number, to: number, step?: number): number[];
    sum(): number;
    tail<T>(): T[];
    transpose<T>(): T[][];
    union<T>(array: T[]): T[];
    zip(...array: any[]): any[];
  }

  interface String {
    words(): string[];
    toList(): string[];
    lines(): string[];
  }
}
