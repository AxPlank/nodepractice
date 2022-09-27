/**
 * 백준 10815: 숫자 카드
 * https://www.acmicpc.net/problem/10815
*/

const fs = require('fs');
const [N, Ns, M, Ms] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e, idx) => {
        if (idx === 1) {
            return e.split(' ').map(Number).sort((a, b) => {
                return a - b;
            });
        } else {
            return e.split(' ').map(Number);
        }
    });
let output = new Array();

for (i of Ms) {
    BinarySearch(i);
}

console.log(output.join(' '));

function BinarySearch(i) {
    let [l, m, r] = [0, Math.floor((N-1)/2), N-1];

    while (l <= r) {

        if (i === Ns[m]) {
            output.push(1);
            return ;
        }

        if (i < Ns[m]) {
            r = m - 1;
        }

        if (i > Ns[m]) {
            l = m + 1;
        }

        m = Math.floor((r + l) / 2);
    }

    output.push(0);
}