/**
 * 백준 2580: 스도쿠
 * https://www.acmicpc.net/problem/2580
*/

const fs = require('fs');
let table  = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let ZeroPointsArr = [];

get0Point();
sdoku(0);

function get0Point() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (table[i][j] === 0) {
                ZeroPointsArr.push([i, j]);
            }
        }
    }
}

function sdoku(n) {
    if (n === ZeroPointsArr.length) {
        table = table.map((el) => {
            return el.join(' ');
        });

        console.log(table.join('\n'));
        process.exit(0);
    }

    let [x, y] = [ZeroPointsArr[n][0], ZeroPointsArr[n][1]];

    for (let j = 1; j < 10; j++) {
        if (isXY(x, y, j) && isMiniTable(x, y, j)) {
            table[x][y] = j;
            sdoku(n+1);
            table[x][y] = 0;
        }
    }
}

function isXY(x, y, num) {
    if (table[x].includes(num)) {
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (table[i][y] === num) {
            return false;
        }
    }

    return true;
}

function isMiniTable(x, y, num) {
    let [xStart, yStart] = [Math.floor(x / 3) * 3, Math.floor(y / 3) * 3];

    for (let i = xStart; i < xStart + 3; i++) {
        for (let j = yStart; j < yStart + 3; j++) {
            if (table[i][j] === num) {
                return false;
            }
        }
    }

    return true;
}