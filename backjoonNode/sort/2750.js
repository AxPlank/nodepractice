/**
 * 백준 2750: 수 정렬하기
 * https://www.acmicpc.net/problem/2750
*/

// Sol 1 - callback function
const fs = require('fs');
const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

let nums = input.slice(1, input.length).sort((a, b) => {
    return a - b;
});

console.log(nums.join('\n'));

// Sol 2 - loop
nums = input.slice(1, input.length);

for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}

console.log(nums.join('\n'));