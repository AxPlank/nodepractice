let [a, b] = [1, 1];

increase(1, 1);

function increase(a, b) {
    if (a === b); {
        console.log(1);
        return ;
    }

    console.log(a);

    console.log(1);

    increase(a, b)
}