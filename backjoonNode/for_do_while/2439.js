/*
백준 2439번: 별 찍기 - 2
https://www.acmicpc.net/problem/2439
*/

const fs = require('fs');
var input = Number(fs.readFileSync("../inputt.txt").toString());

var str = String();
var output = String();
for (var i = 1; i <= input; i++) {
    str += '*';
    output += str.padStart(input, ' ') + "\n";
}

console.log(output);

/*
padStart: 문자열 왼쪽 공백에 남는 공간만큼의 지정된 문자열 삽입
padEnd: 문자열 오른쪽에서의 padStart
*/