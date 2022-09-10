/*
백준 2941: 크로아티아 알파벳
https://www.acmicpc.net/problem/2941
*/

const fs = require('fs');

let input = fs.readFileSync("../inputt.txt").toString().trim()
    .replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, '_'); // replace에서 // 안에 |연산자를 집어 넣어 다수의 문자열을 같은 문자열로 치환할 수 있음

console.log(input.length);