/**
 * 백준 3053: 택시 기하학
 * https://www.acmicpc.net/problem/3053
*/

const fs = require('fs');
const R = parseInt(fs.readFileSync('../inputt.txt').toString().trim());

const CircleArea = Math.PI * Math.pow(R, 2);
const TaxiArea = Math.pow(R, 2) * 2;

console.log(CircleArea.toFixed(6));
console.log(TaxiArea.toFixed(6));