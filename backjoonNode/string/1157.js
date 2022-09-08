/*
백준 1157: 단어 공부
https://www.acmicpc.net/problem/1157
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().toUpperCase();
let alphabetArr = Array(26).fill(0);

const lenInput = input.length;
for (let i = 0; i < lenInput; i++) {
    alphabetArr[input[i].charCodeAt()-65]++;
}

const maxCnt = Math.max(...alphabetArr);
const maxArr = alphabetArr.filter((e) => {
    return e === maxCnt;
});

maxArr.length >= 2? console.log('?') : console.log(String.fromCharCode(alphabetArr.indexOf(maxCnt) + 65));