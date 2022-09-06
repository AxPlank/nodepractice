/*
백준 3052: 나머지
https://www.acmicpc.net/problem/3052
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n').map(Number);

// Sol 1: include 사용
let arr = Array();

for (let i = 0; i < input.length; i++) {
    if (!arr.includes(input[i] % 42)) { // 중복 가능성 배제 위한 if문
        arr.push(input[i] % 42);
    }
}

console.log(arr.length);

/*
include(value): array에 주어진 vaule거 포함되어 있는지 체크. 포함되어 있다면 true, 아니라면 false 반환
*/

// Sol 2: filter 이용
arr = Array(42).fill(true);
for (let i = 0; i < input.length; i++) { // 입력값의 나머지에 해당하는 인덱스의 값을 false로 변경
    arr[input[i] % 42] = false;
}

console.log(arr.filter((e) => { // filter를 이용해 false로만 이뤄진 새로운 어레이를 만듦. 이 어레이의 길이가 서로 다른 나머지의 개수이므로 길이를 구해 출력함.
    return e === false;
}).length);

/*
filter(callback) : callback 함수가 유도하는 결과로 이뤄진 array 추출
*/

// Sol 3: find 이용 - 이거 블로그 글 쓰기
// arr = Array(42).fill(true);
// for (let i = 0; i < input.length; i++) { // 입력값의 나머지에 해당하는 인덱스의 값을 false로 변경
//     arr[input[i] % 42] = false;
// }

// console.log(arr.find((e) => {
//     return e === false;
// }));