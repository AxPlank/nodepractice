/*
백준 2908: 상수
https://www.acmicpc.net/problem/2908
*/

const fs = require('fs');

// Sol 1
let input = fs.readFileSync("../inputt.txt").toString().trim().split(' ')
    .map((e) => {
        return Number(e.split('').reverse().join(''));
    });

console.log(Math.max(...input));

// Sol 2
input = fs.readFileSync("../inputt.txt").toString().trim().split(' ')
    .map((e) => {
        return Number([e[0], e[1], e[e.length-1]] = [e[e.length-1], e[1], e[0]].join(''));
    });

console.log(Math.max(...input));

/**
 * reverse(): 배열 순서 뒤집음
 */