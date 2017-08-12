var memorizar = function (f) {
    let memoria = [];
    
    let fm = function (i) {
        if (memoria[i]) return memoria[i];
        let tmp = f(i);
        memoria[i] = tmp;
        return tmp;
    }

    return fm;
};

var fib = memorizar(function (i) {
    if (i < 2) return 1;
    return fib(i - 1) + fib(i - 2);
});

console.log("Fib de 1000", fib(1000));