/*
백준 1065: 한수
https://www.acmicpc.net/problem/1065
*/

const fs = require('fs');
let input = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

getHansu(input);

function getHansu(n) {
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        if (i <= 99) {
            cnt ++;
        } else {
            let i_str = String(i).split('').map(Number); // 문자열의 형태에서 parseInt를 이용해도 상관없음
            let d = i_str[0] - i_str[1]; // 인접한 자리에 위치한 수 사이의 간격

            for (let j = 1; j < i_str.length-1; j++) {
                if (i_str[j] - i_str[j+1] !== d) {
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