/*
백준 2839: 설탕 배달
https://www.acmicpc.net/problem/2839
*/

const fs = require('fs');
let input = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

let [cnt_3, cnt_5] = [0, 0];

while (true) {
    if (input % 5 === 0) { // 봉지 크기에 맞춰 설탕을 모두 채웠는지 확인
        cnt_5 = parseInt(input / 5); // 정수가 리턴되지 않을 상황을 대비
        console.log(cnt_3+cnt_5);
        break;
    }
    
    input -= 3; // 필요한 봉지의 수는 3kg 봉지의 수요가 적을수록 감소할 것
    cnt_3 += 1;

    if (input < 0) {
        console.log(-1);
        break;
    }
}