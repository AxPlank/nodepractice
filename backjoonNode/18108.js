/*
백준 18108번: 1998년생인 내가 태국에서는 2541년생?
https://www.acmicpc.net/problem/18108
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    let y = parseInt(line);
    console.log(y - 543);
    rl.close();
});