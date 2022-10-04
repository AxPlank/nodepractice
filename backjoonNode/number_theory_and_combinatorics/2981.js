/**
 * 백준 2981: 검문
 * https://www.acmicpc.net/problem/2981
*/

const fs = require('fs');
const [N, ...Ns] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n').map(Number);

// Sol 1
getOutput();

function getOutput() {
    let Distances = new Set();

    for (let i = 0; i < N - 1; i++) {
        Distances.add(Math.abs(Ns[i] - Ns[i+1]));
    }

    Distances = Array.from(Distances).sort((a, b) => a - b);
    let [N1, N2] = [Distances[0], Distances[1]];

    while (N2 > 0) {
        [N1, N2] = [N2, N1 % N2];
    }

    const SqrtGCD = Math.floor(Math.sqrt(N1)) + 1;
    let Output = [];

    for (let i = 2; i < SqrtGCD; i++) {
        if (N1 % i === 0) {
            Output.push(i);
            Output.push(N1 / i);

            if (i * i === N1) {
                Output.pop();
            }
        }
    }

    Output.push(N1);
    console.log(...Output.sort((a, b) => a - b));
}

// Sol 2
let distance = [];

for (let i = 0; i < N - 1; i++) {
    distance.push(Math.abs(Ns[i] - Ns[i+1]));
}

let GCD = distance[0];
for (let i = 1; i < N - 1; i++) {
    GCD = getGCD(Math.max(GCD, distance[i]), Math.min(GCD, distance[i]));
}

printOutput(GCD);

function getGCD(n1, n2) {
    while (n2 > 0) {
        [n1, n2] = [n2, n1 % n2];
    }

    return n1;
}

function printOutput(n) {
    let Output = [];
    const Sqrtn = Math.floor(Math.sqrt(n)) + 1;

    for (let i = 2; i < Sqrtn; i++) {
        if (n % i === 0) {
            if (i * i !== n) {
                Output.push(i);
            }

            Output.push(parseInt(n / i));
        }
    }

    Output.push(n);
    console.log(Output.sort((a, b) => a - b).join(' '));
}