/*
백준 2438번: 별 찍기 - 1
https://www.acmicpc.net/problem/2438
*/

// So1 1
const fs = require('fs');
var input = Number(fs.readFileSync("../inputt.txt").toString());

for (var i = 1; i <= input; i++) {
    var output = String();
    for (var j = 1; j <= i; j++) {
        output += '*';
    }
    console.log(output);
}

// So1 2
const fs = require('fs');
var input = Number(fs.readFileSync("../inputt.txt").toString());

var str = String();
var output = String();
for (var i = 1; i <= input; i++) {
    str += '*';
    output += str + "\n";
}

console.log(output);