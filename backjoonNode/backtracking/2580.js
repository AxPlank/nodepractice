/**
 * 백준 2580: 스도쿠
 * https://www.acmicpc.net/problem/2580
*/

const fs = require('fs');
let table  = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

function isX