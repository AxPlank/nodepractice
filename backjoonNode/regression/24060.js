/**
 * 백준 24060: 알고리즘 수업 - 병합 정렬 1
 * https://www.acmicpc.net/problem/24060
*/

const fs = require('fs');
let [[A, K], arr] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

mergesort(arr);

function mergesort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let [left, right, mid] = [0, arr.length, Math.round((arr.length) / 2)];
    let output = new Array();

    let [LeftArr, RightArr] = [mergesort(arr.slice(left, mid)), mergesort(arr.slice(mid, right))];
    let l = r = 0;

    while (l < LeftArr.length && r < RightArr.length) {
        if (LeftArr[l] < RightArr[r]) {
            output.push(LeftArr[l]);
            K--;
            checkK(LeftArr[l]);
            l++;
        } else {
            output.push(RightArr[r]);
            K--;
            checkK(RightArr[l]);
            r++;
        }
    }

    for (let i = l; i < LeftArr.length; i++) {
        output.push(LeftArr[i]);
        K--;
        checkK(LeftArr[l])
    }

    for (let i = r; i < RightArr.length; i++) {
        output.push(RightArr[i]);
        K--;
        checkK(RightArr[l]);
    }

    return output;
}

function checkK(n) {
    if (K === 0) {
        console.log(n);
        process.exit();
    }

    if (K < 0) {
        console.log(-1);
        process.exit();
    }
}

/**
 * 문제에 주어진 에시는 만족하나, 제출하면 틀렸다고 나옴. 이에 대해 반례 요청.
 * 질문: https://www.acmicpc.net/board/view/100630
 */