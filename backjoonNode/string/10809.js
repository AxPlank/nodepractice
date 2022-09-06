/*
백준 10809: 알파벳 찾기
https://www.acmicpc.net/problem/10809
*/

const fs = require('fs');
var input = fs.readFileSync("../inputt.txt").toString().trim();

// Sol 1
var output = String();
for (var i = 97; i <= 122; i++) {
    output += input.indexOf(String.fromCharCode(i)) + ' ';
}

console.log(output);

// Sol 2
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.length[26]);
var output = String();
for (var i = 0; i <= alphabet.length-1; i++) {
    output += input.indexOf(alphabet[i]) + ' ';
}

console.log(output);
