/*
백준 1157: 단어 공부
https://www.acmicpc.net/problem/1157
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().toUpperCase();

// So1 1
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

// Sol 2 - Object
let obj = {};

for (let el of input) {
    if (obj[el]) {
        obj[el]++;
    } else {
        obj[el] = 1;
    }
}

const MaxCnt = Math.max(...Object.values(obj));
const AlphabetCnt = Object.values(obj).filter((e) => e === MaxCnt);
if (AlphabetCnt.length >= 2) {
    console.log('?');
} else {
    console.log(Object.keys(obj)[Object.values(obj).indexOf(MaxCnt)]);
}