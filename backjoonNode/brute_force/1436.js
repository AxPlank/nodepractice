/**
 * 백준 1436: 영화감독 숌
 * https://www.acmicpc.net/problem/1436
*/

const fs = require('fs');
const N = parseInt(fs.readFileSync('../inputt.txt').toString().trim());
let [i,cnt] = [665, 0];

while (true) {
    if (i.toString().includes('666') && cnt === N) {
        console.log(i);
        break;
    }

    i++;

    if (i.toString().includes('666') && cnt !== N) {
        cnt++;
    }
}