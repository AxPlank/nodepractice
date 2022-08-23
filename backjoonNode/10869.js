/*
백준 10869번: 사칙연산
https://www.acmicpc.net/problem/10869
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    let arr = line.split(' ');
    let A = parseInt(arr[0]);
    let B = parseInt(arr[1])
    console.log(A + B);
    console.log(A - B);
    console.log(A * B);
    console.log(parseInt(A / B));
    console.log(A % B);
    rl.close();
});