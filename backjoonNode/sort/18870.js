/**
 * 백준 18870: 좌표 압축
 * https://www.acmicpc.net/problem/18870
*/

const fs = require('fs');
const [N, points] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

const pointmin = Math.min(...points);
const output = points.map((i) => {
    let arr = [];
    console.log(`i: ${i}`);
    for (let j = 0; j < N; j++) {
        console.log(`points[j]: ${points[j]}`);
        if (points[j] <= i && points[j] > pointmin && arr.includes(points[j])) {
            arr.push(points[j]);
        }
    }

    return arr.length;
});

console.log(output.join(' '));