/*
백준 2525번: 오븐 시계
https://www.acmicpc.net/problem/2525
*/

const fs = require('fs');
const inputt = fs.readFileSync("../inputt.txt").toString().trim().split("\n");

let cook_m = Number(inputt[1]) % 60;
let cook_h = (Number(inputt[1]) - cook_m) / 60;
let [hour, minute] = inputt[0].split(' ').map((e) => {return Number(e);});

hour += cook_h;
minute += cook_m;
if (minute >= 60) {
    hour += 1;
    minute -= 60;
}

if (hour >= 24) {
    hour -= 24;
}

console.log(hour + ' ' + minute);

// Sol 2: 더 간단한 풀이
let [hour2, minute2] = inputt[0].split(' ').map((e) => {return Number(e);});

minute2 += Number(inputt[1]);
hour2 += Math.floor(minute2 / 60);
if (hour2 >= 24) {
    hour2 -= 24;
}
minute2 %= 24;

console.log(hour2 + ' ' + minute2);


