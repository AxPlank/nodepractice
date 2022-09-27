/**
 * 백준 14425: 문자열 집합
 * https://www.acmicpc.net/problem/14425
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
let cnt = 0;
const [N, M] = input[0];
const S = input.slice(1, N+1).sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
const Words = input.slice(N+1, input.length);

for (i of Words) {
    BinarySearch(i);
}

console.log(cnt);

function BinarySearch(word) {
    let [l, m, r] = [0, Math.floor((N-1)/2), N-1];

    while (l <= r) {
        if (word === S[m]) {
            cnt++;
            return ;
        }

        if (word > S[m]) {
            l = m + 1;
        }

        if (word < S[m]) {
            r = m - 1;
        }

        m = Math.floor((r + l) / 2);
    }
}