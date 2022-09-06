/*
백준 4344: 평균은 넘겠지
https://www.acmicpc.net/problem/4344
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

T = Number(input[0]);
let avg; // 평균 성적을 담을 변수
let cnt; // 평균을 넘는 성적을 가진 학생들의 수를 담을 변수

for (let i = 1; i < T+1; i++) {
    avg = (input[i].reduce((accumulator, current) => accumulator + current, 0) - input[i][0]) / input[i][0]; // 케이스에 맞는 avg로 초기화
    cnt = 0 // cnt 초기화

    for (let j = 1; j < input[i][0]+1; j++) {
        if (input[i][j] > avg) { // 평균이 넘는다면 cnt의 값을 1 증가시킴
            cnt++;
        }
    }

    console.log(`${(100 * cnt / input[i][0]).toFixed(3)}%`); // toFixed를 사용해 셋째 자리까지 출력되게 함
}

/*
toFixed(Number): 소수점 이하 Number 자리까지 유효숫자를 지정함
*/