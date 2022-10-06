/**
 * 백준 11050: 이항 계수 1
 * https://www.acmicpc.net/problem/11050
*/

const fs = require('fs');
const [N, K] = fs.readFileSync('../inputt.txt').toString().trim().split(' ').map(Number);

printComb(N, K);

function printComb(N, K) {
    const [NFact, KFact, NKFact] = [getFact(N), getFact(K), getFact(N-K)];

    console.log(parseInt(NFact / KFact / NKFact));
}

function getFact(n) {
    if (n <= 1) {
        return 1;
    } else {
        return getFact(n-1) * n;
    }
}