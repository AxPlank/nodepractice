/**
 * 백준 10989: 수 정렬하기 3
 * https://www.acmicpc.net/problem/10989
*/

const fs = require('fs');
const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);
let arr = {};

for (let i = 1; i < input.length; i++) {
    if (!arr[input[i]]) {
        arr[input[i]] = 1;
    } else {
        arr[input[i]] += 1;
    }
}

let keys = Object.keys(arr);
let output = '';

for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < arr[keys[i]]; j++) {
        output += keys[i] + '\n';
    }
}

console.log(output.substring(0, output.length-1));