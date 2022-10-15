/**
 * 백준 14888: 연산자 끼워넣기
 * https://www.acmicpc.net/problem/14888
*/

const fs = require('fs');
let [[N], nums, [plus, minus, mul, div]]  = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let [MaxResult, MinResult] = [0, Number.MAX_SAFE_INTEGER];

dfs(1, plus, minus, mul, div, nums[0]);

if (MaxResult === -0) {
    console.log(Math.abs(MaxResult));
} else {
    console.log(MaxResult);
}

if (MinResult === -0) {
    console.log(Math.abs(MinResult));
} else {
    console.log(MinResult);
}

function dfs(cnt, plus, minus, mul, div, ret) {
    if (cnt === N) {
        MaxResult = Math.max(MaxResult, ret);
        MinResult = Math.min(MinResult, ret);

        return ;
    }

    if (plus) {
        ret = ret + nums[cnt];
        dfs(cnt+1, plus-1, minus, mul, div, ret);
    }

    if (minus) {
        ret = ret - nums[cnt];
        dfs(cnt+1, plus, minus-1, mul, div, ret);
    }

    if (mul) {
        ret = ret * nums[cnt];
        dfs(cnt+1, plus, minus, mul-1, div, ret);
    }

    if (div) {
        if (ret < 0) {
            ret = -Math.floor(-ret / nums[cnt]);
            dfs(cnt+1, plus, minus, mul, div-1, ret);
        } else {
            ret = Math.floor(ret / nums[cnt]);
            dfs(cnt+1, plus, minus, mul, div-1, ret);
        }
    }
}

/**
 * 결과값은 전부 옳게 나오는데, 정작 답은 틀렸다고 나와서 질문 올려둔 상태
 * 질문 - https://www.acmicpc.net/board/view/102087
 * 
 * 파이썬을 이용해 동일한 코드를 작성했을 때는 맞게 나왔었음
 */