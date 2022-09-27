/**
 * 백준 1620: 나는야 포켓몬 마스터 이다솜
 * https://www.acmicpc.net/problem/1620
*/

const fs = require('fs');
const input = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e, idx) => {
        if (idx === 0) {
            return e.split(' ').map(Number);
        } else {
            return e;
        }
    });
const [N, M] = input[0];
let Dictionary = {}
const Quiz = input.slice(N+1, input.length);
let output = new Array();

for (let i = 1; i < N+1; i++) {
    Dictionary[input[i]] = i;
}

const Keys = Object.keys(Dictionary);

for (q of Quiz) {
    if (parseInt(q)) {
        output.push(Keys[parseInt(q)-1]);
    } else {
        output.push(Dictionary[q]);
    }
}

console.log(output.join('\n'));