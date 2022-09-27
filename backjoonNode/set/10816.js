/**
 * 백준 10816: 숫자 카드 2
 * https://www.acmicpc.net/problem/10816
*/

const fs = require('fs');
const [N, Ns, M, Ms] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

// So1 1 - Map()
let Mapp = new Map();
let Output = new Array();

for (i of Ns) {
    if (Mapp.has(i)) {
        Mapp.set(i, Mapp.get(i) + 1);
    } else {
        Mapp.set(i, 1);
    }
}

for (i of Ms) {
    if (Mapp.has(i)) {
        Output.push(Mapp.get(i));
    } else {
        Output.push(0);
    }
}

console.log(Output.join(' '));

// So1 2 - Object
let Obj = {};
let Output = new Array();

for (i of Ns) {
    if (Obj[i] >= 0) {
        Obj[i]++;
    } else {
        Obj[i] = 1;
    }
}

for (i of Ms) {
    if (Obj[i]) {
        Output.push(Obj[i]);
    } else {
        Output.push(0);
    }
}

console.log(...Output);