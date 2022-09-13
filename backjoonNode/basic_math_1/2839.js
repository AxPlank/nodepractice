/*
백준 2839: 설탕 배달
https://www.acmicpc.net/problem/2839
*/

const fs = require('fs');
let input = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

let [cnt_3, cnt_5] = [0, 0];

while (true) {
    if (input % 5 === 0) {
        cnt_5 = input / 5;
        console.log(cnt_3+cnt_5);
        break;
    }
    
    input -= 3;
    cnt_3 += 1;

    if (input < 0) {
        console.log(-1);
        break;
    }
}