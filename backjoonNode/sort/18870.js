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
const points_set = new Set(points);
const points_arr = Array.from(points_set).sort((a, b) => {
    return a - b;
});

const output = points.map((e) => {
    return pointpress(e);
})

console.log(...output);

function pointpress(n) {
    let [l, r] = [0, points_arr.length];
    let mid;

    while (l < r) {
        mid = Math.floor((l+r) / 2);
        if (points_arr[mid] < n) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return l;
}