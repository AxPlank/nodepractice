/**
 * 백준 2798: 블랙잭
 * https://www.acmicpc.net/problem/2798
*/

const fs = require('fs');
const [[N, M], nums] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let sumclose = 0;

// Sol 1 - Recursive Call
dfs([], 0);

console.log(sumclose);

function dfs(card) {
    if (card.length === 3) {
        let cardsum = card.reduce((a, b) => {
            return a + b;
        }, 0);

        if (cardsum <= M) {
            if (sumclose === M) {
                console.log(M);
                process.exit();
            } else {
                sumclose = Math.max(cardsum, sumclose);
            }
        }

        return ;
    }

    for (let i = 0; i < N; i++) {
        if (!card.includes(nums[i])) {
            card.push(nums[i]);
            dfs(card);
            card.pop();
        }
    }
}

// Sol 2 - loop
let card = [];
let cardsum;

for (let i = 0; i < N; i++) {
    card.push(nums[i]);

    for (let j = 0; j < N; j++) {
        if (j !== i) {
            card.push(nums[j]);

            for (let k = 0; k < N; k++) {
                if (k !== j && k !== i) {
                    card.push(nums[k]);
    
                    cardsum = card.reduce((a, b) => {
                        return a + b;
                    }, 0);
        
                    if (cardsum <= M) {
                        if (cardsum === M) {
                            console.log(M);
                            process.exit();
                        } else {
                            sumclose = Math.max(sumclose, cardsum);
                        }
                    }
    
                    card.pop();
                }
            }

            card.pop();
        }
    }

    card.pop();
}

console.log(sumclose);