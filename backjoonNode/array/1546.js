/*
백준 1546: 평균
https://www.acmicpc.net/problem/1546
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let maxScore = Math.max(...input[1]);
let table = input[1].map((e) => { // map를 이용해 문제에서 요구하는 형태로 값 변환
    return e / maxScore * 100;
});

let sumScore = table.reduce((accumulator, current) => accumulator + current, 0); // reduce를 이용해 변형된 성적의 총점수 계산

console.log(sumScore / table.length);

/*
reduce(callback[, args]): 주어진 조건과 값들에 따라 배열 자체를 변형함
*/