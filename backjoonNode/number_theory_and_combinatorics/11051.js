/**
 * 백준 11051: 이항 계수 2
 * https://www.acmicpc.net/problem/11051
*/

const fs = require('fs');
const [N, K] = fs.readFileSync('../inputt.txt').toString().trim().split(' ').map(Number);

let PascalTriangle = [];

for (let i = 0; i <= N; i++) {
    PascalTriangle.push([]);

    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            PascalTriangle[i].push(1);
        } else {
            PascalTriangle[i].push((PascalTriangle[i-1][j-1] + PascalTriangle[i-1][j]) % 10007);
        }
    }
}

console.log(PascalTriangle[N][K] % 10007);

/**
 * 왜 틀렸다고 하는지 몰라서 질문 남겨놓음
 * 질문: https://www.acmicpc.net/board/view/101457
 * 
 * 닫변: 수가 너무 커서 오버플로우가 발생할 수 있음
 */