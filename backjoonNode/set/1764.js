/**
 * 백준 1764: 듣보잡
 * https://www.acmicpc.net/problem/1764
*/

const fs = require('fs');
const [[N, M], ...names] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e, idx) => {
        if (idx === 0) {
            return e.split(' ').map(Number);
        } else {
            return e;
        }
    });

const NameN = names.slice(0, N).sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});
const NameM = names.slice(N, N+M).sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    };
});
let Output = [];
let cnt = 0;

for (let name of NameM) {
    BinarySearch(name);
}

console.log(cnt);
console.log(Output.join('\n'));

function BinarySearch(name) {
    let [l, m, r] = [0, Math.floor((N-1)/2), N-1];

    while (l <= r) {

        if (NameN[m] === name) {
            cnt++;
            Output.push(name);
            break;
        }

        if (NameN[m] > name) {
            r = m - 1;
        }

        if (NameN[m] < name) {
            l = m + 1;
        }

        m = Math.floor((r+l) / 2);
    }
}