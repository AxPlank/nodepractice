/*
백준 2775: 부녀회장이 될테야
https://www.acmicpc.net/problem/2775
*/

const fs = require('fs');
const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

const T = input[0];
const casee = input.slice(1, input.length);
let k, n, people;
let output = new Array();

for (let i = 0; i < T; i++) {
    [k, n] = [casee[i*2], casee[i*2+1]];
    people = getComb(k, n);

    output.push(people);
}

function getComb(k, n) { // k층의 n호에 사는 주민은 (n+k k+1)^T의 조합 패턴을 보이고 있음
    let [comb_n, comb_r] = [n+k, k+1]

    return parseInt(getFact(comb_n) / (getFact(comb_r) * getFact(comb_n-comb_r))); // 정수가 아닌 실수가 리턴되는 경우가 있어 parseInt를 이용해 정수만 추출
}

function getFact(n) {
    if (n === 1 || n === 0) {
        return 1;
    }

    return getFact(n-1) * parseInt(n);
}

console.log(output.join('\n'));

/** 
 * 반례 관련 질문올림 (https://www.acmicpc.net/board/view/99824)
 * 
 * 틀렸다고 나온 이유
 * 1. Array에 불필요한 값 존재 - Array에 i에 대응하는 자리에 값을 채우면 되는데, 새로운 자리를 만들어 값을 집어넣음
 * → 해당 부분 수정함. 아예 선언 자체를 빈 어레이로 바꿨음
 * 
 * 2. 리턴값의 차이 - 리턴되는 값이 정수의 형태가 아니기 떄문에 틀렸다고 나온 것이다.
 * → 이에 대해 직접 테스트를 진행 해 보았으나, parseInt() 함수를 사용했을 떄와 사용하지 않았을 떄의 리턴값은 정수로 동일했음. 이와 관련하여 댓글을 통해 추가질문을 한 상태
 * → 추가질문에 대한 답변: 부동 소수점 문제로 인한 반례 존재. 그렇기 때문에 parseInt()를 사용해야 함. qed.
 */