// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
export {};

function solution(N: number): number {
  // write your code in JavaScript (Node.js 8.9.4)
  const regex: RegExp = /10+(?=1)/g;
  const result: RegExpMatchArray | null = N.toString(2).match(regex);
  if (!result) {
    return 0;
  }
  return result
    .map((match: string): number => match.length - 1)
    .sort((a: number, b: number): number => b - a)[0];
}
