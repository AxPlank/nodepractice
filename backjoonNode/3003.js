/*
백준 3003번: 킹, 퀸, 룩, 비숍, 나이트, 폰
https://www.acmicpc.net/problem/3003
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    const chess = [1, 1, 2, 2, 2, 8];
    const piece = line.split(' ').map(Number);
    const diff = chess - piece;
    console.log(111);
    rl.close();
});