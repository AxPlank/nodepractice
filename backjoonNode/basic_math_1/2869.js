/*
백준 2869: 달팽이는 올라가고 싶다
https://www.acmicpc.net/problem/2869
*/

const fs = require('fs');

let [A, B, V] = fs.readFileSync("../inputt.txt").toString().trim().split(' ').map(Number);

let days = Math.ceil(V - B / A - B);
console.log(days);

/**
 * 올라가는 데 걸리는 일 수가 n이라고 할 때, 식을 세우면
 * 
 * nA - B(n - 1) > V
 * 
 * 가 될 것임. 이것을 n에 대해 정리하면,
 * 
 * n > (V - B) / (A - B)
 * 
 * 이므로, 우변의 값을 올림 처리한 값이 n의 최솟값이 될 것임.
 */