/*
백준 10818: 최소, 최대
https://www.acmicpc.net/problem/10818
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let arr = input[1];
console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);