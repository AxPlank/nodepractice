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
if (minute >= 60) { // 현재 분에 오븐에서 굽는 시간을 더했을 때, 60분이 넘으면 종료 예정 시각에 1 추가
    hour += 1;
    minute %= 60;
}

if (hour >= 24) { // 24시가 넘으면 00시가 되는 것을 고려
    hour %= 24;
}

console.log(hour + ' ' + minute);

// Sol 2: 더 간단한 풀이
let [hour2, minute2] = inputt[0].split(' ').map((e) => {return Number(e);});

minute2 += Number(inputt[1]); // line 29-30, 34: Sol 1에서의 첫 번째 if문
hour2 += Math.floor(minute2 / 60);
if (hour2 >= 24) { // Sol 1에서의 두 번째 if문
    hour2 %= 24;
}
minute2 %= 60;

console.log(hour2 + ' ' + minute2);