/**
 * 백준 9663: N-Queen
 * https://www.acmicpc.net/problem/9663
*/

const fs = require('fs');
const N = parseInt(fs.readFileSync('../inputt.txt').toString().trim());
let cnt = 0;

dfs([]);

console.log(cnt);

function dfs(arr) {
    if (arr.length === N) {
        cnt++;
        return ;
    } else {
        for (let i = 0; i < N; i++) {
            if (arr.length === 0 || isQueen(arr, i)) {
                arr.push(i);
                dfs(arr);
                arr.pop();
            }
        }
    }
}

function isQueen(arr, y) {
    if (arr.includes(y)) {
        let arrlen = arr.length;
        let x = arrlen;

        // console.log('x:', x,'y:', y, 't/f:', false);
        // console.log('================');
        return false;
    } else {
        let x = arr.length;
        // console.log('x:', x,'y:', y);

        for (let i = 0; i < x; i++) {
            if (Math.abs(y - arr[i]) === x - i) {
                // console.log('t/f:', false);
                // console.log('================');
                return false;
            }
        }

        // console.log('t/f:', true);
        // console.log('================');

        return true;
    }
}