/**
 * 백준 1358: 하키
 * https://www.acmicpc.net/problem/1358
*/

const fs = require('fs');
const [[W, H, X, Y, P], ...Points] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
const R = parseInt(H / 2);
let cnt = 0;

for (let i = 0; i < P; i++) {
    if (isPlaced(Points[i])) {
        cnt++;
    }
}

console.log(cnt);

function isPlaced(arr) {
    const [x, y] = arr;

    if ((y >= Y && y <= Y + H)) {
        if (x >= X && x <= X + W) {
            return true;
        } else {
            if (getDistance(x, y) <= R) {
                return true;
            }

            return false;
        }
    }
}

function getDistance(x, y) {
    const ry = Y + R;
    let rx, d;

    if (x < X) {
        rx = X;
        d = Math.sqrt(Math.pow(rx - x, 2) + Math.pow(ry - y, 2));

        return d;
    } else {
        rx = X + W;
        d = Math.sqrt(Math.pow(rx - x, 2) + Math.pow(ry - y, 2));

        return d;
    }
}