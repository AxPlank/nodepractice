/*
백준 4673: 셀프 넘버
https://www.acmicpc.net/problem/4673
*/

let arrSN = Array(10001).fill(true);
let output = '';

/**
 * 셀프 넘버 함수
 */

for (let i = 1; i < 10001; i++) {
    getSN(i, arrSN);
}

for (let i = 1; i < arrSN.length; i++) {
    if (arrSN[i]) { // 셀프 넘버를 output에 추가
        output += i+'\n';
    }
}

console.log(output);

function getSN(n, arr) {
    let sn = n;
    let len = String(n).length;

    for (let i = 0; i < len; i++) {
        sn += n % 10;
        n = Math.floor(n / 10); // 일의 자릿수 초기화
    }

    if (sn <= 10000) { // sn의 값은 n이 생성자가 되어 만들 수 있으므로, sn은 셀프 넘버가 아니라는 의미에서 false로 전환
        arr[sn] = false;
    }

}