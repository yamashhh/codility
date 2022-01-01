"use strict";
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!A.length) {
        return 1;
    }
    const naturalSum = ((A.length + 1) / 2) * (A.length + 2);
    return A.reduce((previous, current) => previous - current, naturalSum);
}
console.log(solution([1, 3]));
