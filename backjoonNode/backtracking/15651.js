/**
 * 백준 15651: N과 M (3)
 * https://www.acmicpc.net/problem/15651
*/

const fs = require('fs');
const [N, M] = fs.readFileSync('../inputt.txt').toString().trim().split(' ').map(Number);

let output = [];

dfs([]);

console.log(output.join('\n'));

function dfs(arr) {
    if (arr.length === M) {
        output.push(arr.join(' '));
        return ;
    } else {
        for (let i = 1; i <= N; i++) {
            arr.push(i);
            dfs(arr);
            arr.pop();
        }
    }
}