/*
백준 8958: OX퀴즈
https://www.acmicpc.net/problem/8958
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n');

// Sol 1
T = Number(input[0]);
for (let i = 1; i < T + 1; i++) {
    let score = 0;
    let sumScore = 0;

    for (let j = 0; j < input[i].length; j++) {
        input[i][j] === 'O'? score++: score = 0 ;
        sumScore += score;
    }

    console.log(sumScore);
}

/*
다음과 같은 상황에서 계속 백준 사이트와 나의 노트북에서의 결과가 다르게 발생함
1. /r/n을 기준으로 분리하여 백준에 제출했을 때 백준에서 계속 오류 발생함.
2. /n으로 분리 후, 좀 더 정확하게 값을 지정하고자 input[0][0]으로 T를 지정했을 때, 백준에서는 정답이 아니라고 나옴

결과가 이해되지 않아 백준에 질문을 했음 - https://www.acmicpc.net/board/view/99205
답변 정리
1. 운영체제에 따라 줄바꿈이 \r\n\일수도 \n일수도 있다. fs를 이용하여 파일을 읽어올 때, 당장 윈도우, 리눅스에서의 접근 경로가 다른것을 생각해보면 될 듯.
2. input[0][0]으로 값을 지정했을 때는 null terminator가 사라진다. 그래서 Number로 값을 변환하면 string의 값인데 null terminator가 들어있지 않아 문제가 생길 수 있다.
*/

// Sol 2 - Number가 아닌 parseInt를 이용하고 input[0][0]으로 T의 값을 지정

T = parseInt(input[0][0]);
for (let i = 1; i < T + 1; i++) {
    let score = 0;
    let sumScore = 0;

    for (let j = 0; j < input[i].length; j++) {
        input[i][j] === 'O'? score++: score = 0 ;
        sumScore += score;
    }

    console.log(sumScore);
}

/*
결과 - 실패. input[0][0] 대신 input[0]을 사용했을 때, 정답으로 처리되는 것을 보면, Sol 1과 동일한 이유로 오답 처리가 되는 듯 하다.
*/