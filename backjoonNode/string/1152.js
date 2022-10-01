/*
백준 1152: 단어의 개수
https://www.acmicpc.net/problem/1152
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split(' ');

if (input[0] = '') { // 입력값이 존재하지 않는 경우도 고려해야 함. split()을 사용할 경우 입력값이 없어도 ''의 값을 가진 리스트로 변환이 됨
    console.log(0);
} else {
    console.log(input.length);
}