/*
백준 1008번: A/B
https://www.acmicpc.net/problem/1008
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
    console.log(A / B);
    rl.close();
});