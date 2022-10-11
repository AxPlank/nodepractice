/**
 * 백준 15650: N과 M (2)
 * https://www.acmicpc.net/problem/15650
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
            if ((!arr.includes(i) && i > arr.at(-1)) || arr.length === 0) {
                arr.push(i);
                dfs(arr, idx+1);
                arr.pop();
            }
        }
    }
}