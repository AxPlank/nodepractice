/*
백준 14681번: 사분면 고르기
https://www.acmicpc.net/problem/14681
*/

/*
permission denied인 경우, fs 대신 readline 호출해 사용! 이때 백준에서는 EACCES 에러 발생
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = new Array()
rl.on("line", (line) => {
    arr.push(Number(line));
}).on("close", (close) => {
    if (arr[0] > 0) {
        arr[1] > 0? console.log(1): console.log(4);
    } else {
        arr[1] > 0? console.log(2): console.log(3);
    }
});