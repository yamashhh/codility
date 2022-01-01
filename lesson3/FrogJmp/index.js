"use strict";
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    const result = (Y - X) / D;
    if (!Number.isInteger(result)) {
        return Math.floor(result) + 1;
    }
    return result;
}
console.log(solution(19, 85, 30));
