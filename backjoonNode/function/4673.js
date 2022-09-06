/*
백준 4673: 셀프 넘버
https://www.acmicpc.net/problem/4673
*/

let arrSN = Array(10001).fill(true);
let output = '';

function getSN(n, arr) {
    let sn = n;
    let len = String(n).length;

    for (let i = 0; i < len; i++) {
        sn += n % 10;
        n = Math.floor(n / 10);
    }

    console.log(sn);
    if (sn <= 10000) { // 셀프 넘버가 아니라면, 해당 인덱스에 위치한 값을 false로 변환함.
        arr[sn] = false;
    }

}

for (let i = 1; i < 10001; i++) {
    getSN(i, arrSN);
}

for (let i = 1; i < arrSN.length; i++) {
    if (arrSN[i]) {
        output += i+'\n';
    }
}

console.log(output);