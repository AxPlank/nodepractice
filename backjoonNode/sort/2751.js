/**
 * 백준 2751: 수 정렬하기 2
 * https://www.acmicpc.net/problem/2751
*/

// Sol 1 - callback function
const fs = require('fs');
const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

// let nums = input.slice(1, input.length).sort((a, b) => {
//     return a - b;
// });

// console.log(nums.join('\n'));

// Sol 2 - Merge Sort
// let nums = input.slice(1, input.length);

// console.log(mergesort(nums).join('\n'));

// function mergesort(arr) {
//     if (arr.length === 1) {
//         return arr;
//     }

//     let [left, right] = [0, arr.length];
//     let mid = Math.floor((left + right) / 2);
//     let output = new Array();

//     let [LeftArr, RightArr] = [mergesort(arr.slice(left, mid)), mergesort(arr.slice(mid, right))];
//     let l = r = 0;

//     while (l < LeftArr.length && r < RightArr.length) {
//         if (LeftArr[l] < RightArr[r]) {
//             output.push(LeftArr[l]);
//             l++;
//         } else {
//             output.push(RightArr[r]);
//             r++;
//         }
//     }

//     for (let i = l; i < LeftArr.length; i++) {
//         output.push(LeftArr[i]);
//     }

//     for (let i = r; i < RightArr.length; i++) {
//         output.push(RightArr[i]);
//     }

//     return output;
// }

// Sol 3 - Quick Sort (제출 시 시간초과 발생함)
let nums = input.slice(1, input.length);

quicksort(0, nums.length);
console.log(nums.join('\n'));

function quicksort(left, high) {
    if (left >= high) {
        return ;
    }

    let [l, r, pivot] = [left, high-2, high-1];
    console.log(`l: ${l}, r: ${r}, pivot: ${pivot}`);
    console.log(`pivot: ${nums[pivot]}`);

    while (l <= r) {
        console.log(`l: ${l}, r: ${r}`);
        while (nums[l] < nums[pivot]) {
            l++;
        }

        while (nums[r] > nums[pivot]) {
            r--;
        }
        console.log(`l: ${l}, r: ${r}`);

        if (r >= l && nums[l] >= nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
        }
    }

    [nums[l], nums[pivot]] = [nums[pivot], nums[l]];

    console.log(nums);

    quicksort(left, l);
    quicksort(l+1, high);
}