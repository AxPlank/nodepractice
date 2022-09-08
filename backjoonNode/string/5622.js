/*
백준 5622: 다이얼
https://www.acmicpc.net/problem/5622
*/

const fs = require('fs');

// Sol 1: switch-case 이용
let input = fs.readFileSync("../inputt.txt").toString().trim();

let output = 0;

function getTime(alphabet) {
    switch (alphabet) {
        case 'A':
        case 'B':
        case 'C':
            return 3;
        case 'D':
        case 'E':
        case 'F':
            return 4;
        case 'G':
        case 'H':
        case 'I':
            return 5;
        case 'J':
        case 'K':
        case 'L':
            return 6;
        case 'M':
        case 'N':
        case 'O':
            return 7;
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
            return 8;
        case 'T':
        case 'U':
        case 'V':
            return 9;
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            return 10;
    }
}

for (let i = 0; i < input.length; i++) {
    output += getTime(input[i]);
}

console.log(output);

// Sol 2: json 이용
const dial = {
    "ABC": 3, "DEF": 4, "GHI": 5, "JKL": 6,
    "MNO": 7, "PQRS": 8, "TUV": 9, "WXYZ": 10
};
const dial_keys = Object.keys(dial);

output = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < dial_keys.length; j++) {
        if (dial_keys[j].includes(input[i])) {
            output += dial[dial_keys[i]];
            break;
        }
    }
}

console.log(output);

// Sol 3: Array 이용
const dialArr = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

output = 0;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < dialArr.length; j++) {
        if (dialArr[j].includes(input[i])) {
            output += dialArr.indexOf(dialArr[j]) + 3;
            break;
        }
    }
}

console.log(output);