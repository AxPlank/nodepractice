/**
 * 백준 2004: 조합 0의 개수
 * https://www.acmicpc.net/problem/2004
*/

const fs = require('fs');
const [n, m] = fs.readFileSync('../inputt.txt').toString().trim().split(' ').map(Number);

const Cnt5 = getCnt(n, 5) - getCnt(m, 5) - getCnt(n - m, 5);
const Cnt2 = getCnt(n, 2) - getCnt(m, 2) - getCnt(n - m, 2);

console.log(Math.min(Cnt2, Cnt5));

function getCnt(n, num) {
    let Cnt = 0;

    while (n > 0) {
        Cnt += Math.floor(n / num);
        n = Math.floor(n / num);
    }

    return Cnt;
}