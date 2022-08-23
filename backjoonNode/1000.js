/*
백준 1000번: A+B
https://www.acmicpc.net/problem/1000
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    let arr = line.split(' ');
    console.log(parseInt(arr[0]) + parseInt(arr[1]));
    rl.close();
});