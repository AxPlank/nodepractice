/**
 * 백준 4153: 직각삼각형
 * https://www.acmicpc.net/problem/4153
*/

const fs = require('fs');
const input = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e = e.split(' ').map(Number);
    });

let MaxValue;
let MaxSquare, OtherSquare;
let i = 0;
let Output = [];

OrthogonalTriangle();
console.log(Output.join('\n'));

function OrthogonalTriangle() {
    while (true) {
        if (input[i][0] === 0 && input[i][0] === input[i][1] && input[i][0] === input[i][2]) {
            break;
        }
    
        MaxValue = Math.max(...input[i]);
        MaxSquare = Math.pow(MaxValue, 2);
        OtherSquare = input[i].reduce((accumulator, current) => {
            if (current === MaxValue) {
                return accumulator;
            } else {
                return accumulator + Math.pow(current, 2);
            }
        }, 0);
    
        if (MaxSquare === OtherSquare) {
            Output.push('right');
        } else {
            Output.push('wrong');
        }
    
        i++;
    }
}