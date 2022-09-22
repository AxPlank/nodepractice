/**
 * 백준 2108: 통계학
 * https://www.acmicpc.net/problem/2108
*/

const fs = require('fs');
const [N, ...arr] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

const nums = arr.sort((a, b) => {
    return b - a;
});
let output = new Array();

// Mean
const means = Math.round(nums.reduce((a, b) => {
    return a + b;
}, 0) / N);

if (means === -0) {
    output.push(0);
} else {
    output.push(means);
}

// Median
const median = nums[(N-1) / 2];
output.push(median);

// Mode
let numscnt = {}
for (let i = 0; i < N; i++) {
    if (!numscnt[nums[i]]) {
        numscnt[nums[i]] = 1;
    } else {
        numscnt[nums[i]] += 1;
    }
}

const maxvalue = Math.max(...Object.values(numscnt));
const keys = Object.keys(numscnt).map(Number).sort((a, b) => {
    return a - b;
});
let cnt = 0;
let mode;
for (let i = 0; i < keys.length; i++) {
    if (cnt > 1) {
        break;
    }

    if (numscnt[keys[i]] === maxvalue) {
        mode = keys[i];
        cnt++;
    }
}
output.push(mode);

// Range
const range = nums[0] - nums[N-1];
output.push(range);

console.log(output.join('\n'));
