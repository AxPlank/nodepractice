/*
백준 10809: 알파벳 찾기
https://www.acmicpc.net/problem/10809
*/

const fs = require('fs');
var input = fs.readFileSync("../inputt.txt").toString().trim();

// Sol 1
var output = '';

for (var i = 97; i <= 122; i++) {
    output += input.indexOf(String.fromCharCode(i)) + ' '; // 아스키 코드 활용. 해당되는 아스키 코드의 문자열이 존재할 때, 위치한 인덱스 중 0에 제일 가까운 값 입력
}

console.log(output);

// Sol 2
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var output = '';

for (var i = 0; i < alphabet.length; i++) {
    output += input.indexOf(alphabet[i]) + ' '; // 해당 알파벳이 위치한 인덱스 중 제일 작은 값을 output에 추가
}

console.log(output);
