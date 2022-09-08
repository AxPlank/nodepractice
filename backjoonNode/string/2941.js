/*
백준 2941: 크로아티아 알파벳
https://www.acmicpc.net/problem/2941
*/

const fs = require('fs');

let input = fs.readFileSync("../inputt.txt").toString().trim();
const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

input.replace(/ad/g, '_');

console.log(input.length);