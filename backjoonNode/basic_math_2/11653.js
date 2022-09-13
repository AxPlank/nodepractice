/*
백준 11653: 소인수분해
https://www.acmicpc.net/problem/11653
*/

const fs = require('fs');

const input = parseInt(fs.readFileSync("../inputt.txt").toString().trim());
let output = new Array();
let [n, i] = [input, 2];

while (true) {
    if (n === 1) {
        console.log(output.join('\n'));
        break;
    }
    if (n % i === 0) {
        output.push(i);
        n /= i;
    } else {
        i++;
    }
}