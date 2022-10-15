/**
 * 백준 14889: 스타트와 링크
 * https://www.acmicpc.net/problem/14889
*/

const fs = require('fs');
let [[N], ...Matrix]  = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let Combinations = [];
let MinDiffPower = Number.MAX_SAFE_INTEGER;

getCombination([]);

const LenCombinations = Combinations.length;
for (let i = 0; i < LenCombinations / 2; i++) {
    const [Left, Right] = [Combinations[i].split(''), Combinations[LenCombinations-1-i].split('')];
    let [LeftPower, RightPower] = [getPower(Left), getPower(Right)];

    MinDiffPower = Math.min(MinDiffPower, Math.abs(LeftPower-RightPower));
}

console.log(MinDiffPower);

function getCombination(arr) {
    if (arr.length === N / 2) {
        Combinations.push(arr.join(''));

        return ;
    }

    for (let i = 0; i < N; i++) {
        if ((!arr.includes(i) && arr[arr.length-1] < i) || arr.length === 0) {
            arr.push(i);
            getCombination(arr);
            arr.pop();
        }
    }
}

function getPower(arr) {
    let Power = 0;

    for (let el1 of arr) {
        for (let el2 of arr) {
            if (el1 !== el2) {
                Power += Matrix[el1][el2];
            }
        }
    }

    return Power;
}