/**
 * 백준 2751: 수 정렬하기 2
 * https://www.acmicpc.net/problem/2751
*/

// Sol 1 - callback function
const fs = require('fs');
const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

var nums = input.slice(1, input.length).sort((a, b) => {
    return a - b;
});

console.log(nums.join('\n'));

// Sol 2 - Merge Sort
var nums = input.slice(1, input.length);

console.log(mergesort(nums).join('\n'));

function mergesort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    var [left, right] = [0, arr.length];
    var mid = Math.floor((left + right) / 2);
    var output = new Array();

    var [LeftArr, RightArr] = [mergesort(arr.slice(left, mid)), mergesort(arr.slice(mid, right))];
    var l = r = 0;

    while (l < LeftArr.length && r < RightArr.length) {
        if (LeftArr[l] < RightArr[r]) {
            output.push(LeftArr[l]);
            l++;
        } else {
            output.push(RightArr[r]);
            r++;
        }
    }

    for (var i = l; i < LeftArr.length; i++) {
        output.push(LeftArr[i]);
    }

    for (var i = r; i < RightArr.length; i++) {
        output.push(RightArr[i]);
    }

    return output;
}

// Sol 3 - Quick Sort (제출 시 시간초과 발생함)
var nums = input.slice(1, input.length);

quicksort(0, nums.length);
console.log(nums.join('\n'));

function quicksort(left, high) {
    if (left >= high) {
        return ;
    }

    var [l, r, pivot] = [left, high-2, high-1];

    while (l <= r) {
        while (nums[l] < nums[pivot]) {
            l++;
        }

        while (nums[r] > nums[pivot]) {
            r--;
        }

        if (r >= l && nums[l] >= nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }

    [nums[l], nums[pivot]] = [nums[pivot], nums[l]];

    quicksort(left, l);
    quicksort(l+1, high);
}

// Sol 4 - Quick Sort (시간 초과)
var nums = input.slice(1, input.length);
quicksort(0, nums.length-1);
console.log(nums.join('\n'));

function quicksort(left, right) {
    if (left >= right) {
        return ;
    }

    var [l, r, pivot] = [left, right, nums[Math.floor((right+left)/2)]];

    while (r >= l) {
        while (nums[r] > pivot) {
            r--;
        }

        while (nums[l] < pivot) {
            l++;
        }

        if (r >= l && nums[l] >= nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }

    quicksort(left, l-1);
    quicksort(l, right);
}