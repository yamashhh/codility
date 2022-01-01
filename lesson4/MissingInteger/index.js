"use strict";
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const filteredAndSorted = [...new Set(A)]
        .filter((num) => num > 0)
        .sort((a, b) => a - b);
    return filteredAndSorted.reduce((previousValue, currentValue) => {
        return previousValue === currentValue ? previousValue + 1 : previousValue;
    }, 1);
}
console.log(solution([-1000000123, -123123, 1, 3, 6, 4, 1, 2]));
