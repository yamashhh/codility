// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
export {};

function solution(A: number[], K: number): number[] {
  // write your code in JavaScript (Node.js 8.9.4)
  let result: number[] = [...A];
  for (let i: number = 0; i < K; i++) {
    result = [...result.slice(-1), ...result.slice(0, result.length - 1)];
  }
  return result;
}
