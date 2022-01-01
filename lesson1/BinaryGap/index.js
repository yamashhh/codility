"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const regex = /10+(?=1)/g;
    const result = N.toString(2).match(regex);
    if (!result) {
        return 0;
    }
    return result
        .map((match) => match.length - 1)
        .sort((a, b) => b - a)[0];
}
