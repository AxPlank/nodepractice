/*
백준 4948: 베르트랑 공준
https://www.acmicpc.net/problem/4948
*/

const fs = require('fs');
const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

let output = new Array();

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
        console.log(output.join('\n'));
        break;
    }

    output.push(getCnt(input[i]));
}

function getCnt(n) {
    let n_max = n * 2;
    let root = Math.floor(Math.sqrt(n_max)) + 1;
    let arr = new Array(n_max+1).fill(true);

    arr[0] = arr[1] = false;
    for (let i = 2; i < root; i++) {
        if (i === 2 || i % 2 !== 0) {
            for (let j = i * 2; j < n_max + 1; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr.slice(n+1, arr.length).filter((e) => {
        return e === true;
    }).length;
}