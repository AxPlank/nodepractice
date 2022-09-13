/*
백준 10757: 큰 수 A+B
https://www.acmicpc.net/problem/10757
*/

const fs = require('fs');
const [A, B] = fs.readFileSync("../inputt.txt").toString().trim().split(' ')
    .map((e) => {
        return BigInt(e);
    });

console.log((A + B).toString());

/*
Bitint(): 큰 수를 처리하기 위한 JS의 타입.
 출력을 할 때에는 뒤에 n이 붙어서 출력되기 때문에 toString()를 이용해 n을 제거하고 출력해야 함.
*/