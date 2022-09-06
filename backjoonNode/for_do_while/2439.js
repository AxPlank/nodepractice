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
padStart(number, pattern): num 길이로 지정된 문자열 왼쪽 공백에 값을 넣고, 남는 공간에는 지정된 패턴을 삽입
padEnd: 문자열 오른쪽에서의 padStart
*/