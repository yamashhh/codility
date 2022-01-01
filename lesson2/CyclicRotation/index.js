"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = [...A];
    for (let i = 0; i < K; i++) {
        result = [...result.slice(-1), ...result.slice(0, result.length - 1)];
    }
    return result;
}
