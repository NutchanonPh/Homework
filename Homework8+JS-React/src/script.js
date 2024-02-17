function Num(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(value);
            resolve();
        }, delay);
    });
}

Num(1, 1000)
    .then(() => Num(2, 1000))
    .then(() => Num(3, 1000))
    .then(() => Num(4, 1000));