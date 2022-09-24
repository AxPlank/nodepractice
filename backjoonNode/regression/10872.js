/**
 * 백준 10870: 피보나치 수 5
 * https://www.acmicpc.net/problem/10870
*/

const fs = require('fs');
const n = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

let arr = [0, 1];
getFibo(2);
const output = arr[n];

console.log(output);

function getFibo(i) {
    if (i > n) {
        return ;
    }

    arr.push(arr[i-1] + arr[i-2]);
    console.log(2)

    return getFibo(i+1);
}