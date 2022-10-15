let testarr = [];

test([]);

console.log(testarr);

function test(arr) {
    if (arr.length === 4) {
        testarr.push(arr);

        return ;
    }

    for (let i = 0; i < 10; i++) {
        if (!arr.includes(i) || arr.length === 0) {
            arr.push(i);
            test(arr);
            arr.pop();
        }
    }
}