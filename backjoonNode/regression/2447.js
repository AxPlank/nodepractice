/**
 * 백준 2447: 별 찍기 - 10
 * https://www.acmicpc.net/problem/2447
*/

const fs = require('fs');
const N = parseInt(fs.readFileSync('../inputt.txt').toString().trim());
let stars = ['***', '* *', '***'];

for (let i = 3; i < N; i *= 3) {
    stars = getStars(stars);
}

console.log(stars.join('\n'));

function getStars(arr) {
    let output = [];
    const arr_len = arr.length;

    for (let i = 0; i < arr_len * 3; i++) {
        if (Math.floor(i / arr_len) === 1) {
            output.push(arr[i % arr_len] + ' '.repeat(arr_len) + arr[i % arr_len]);
        } else {
            output.push(arr[i % arr_len].repeat(3));
        }
    }

    return output;
}