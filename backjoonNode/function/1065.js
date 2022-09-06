/*
백준 1065: 한수
https://www.acmicpc.net/problem/1065
*/

const fs = require('fs');
let input = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

function getHansu(n) {
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        if (i <= 99) {
            cnt ++;
        } else {
            let i_str = String(i).split('').map(Number);
            let d = i_str[0] - i_str[1];

            for (let j = 1; j < i_str.length-1; j++) {
                if (i_str[j] - i_str[j+1] != d) {
                    break;
                }
                if (j === i_str.length - 2) {
                    cnt++;
                }
            }
        }
    }

    console.log(cnt);
}

getHansu(input);