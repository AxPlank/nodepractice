/**
 * 백준 15652: N과 M (4)
 * https://www.acmicpc.net/problem/15652
*/

const fs = require('fs');
const [N, M] = fs.readFileSync('../inputt.txt').toString().trim().split(' ').map(Number);

let output = [];

dfs([], 1);

console.log(output.join('\n'));

function dfs(arr, idx) {
    if (arr.length === M) {
        output.push(arr.join(' '));
        return ;
    } else {
        for (let i = idx; i <= N; i++) {
            if (i >= arr.at(-1) || arr.length === 0) {
                arr.push(i);
                dfs(arr, idx);
                arr.pop();
            }
        }
    }
}