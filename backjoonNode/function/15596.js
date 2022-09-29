/*
백준 15596: 정수 N개의 합
https://www.acmicpc.net/problem/15596
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split(' ').map(Number);

console.log(getSum(input));

function getSum(arr) {
    return arr.reduce((accumulator, current) => accumulator+current, 0)
}