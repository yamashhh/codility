"use strict";
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let i = 0;
    const sorted = A.sort();
    while (i < A.length) {
        const current = sorted[i];
        const next = sorted[i + 1];
        if (current !== next)
            return current;
        i += 2;
    }
}
console.log(solution([
    9, 8, 9, 8, 9, 8, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 6,
    5, 6, 4, 7, 9, 8, 9, 8, 9, 8,
]));
