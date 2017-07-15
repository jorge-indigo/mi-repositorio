var memorizar = function (f) {
    let memoria = [];

    let fm = function (i) {
        if(memoria[i]) return memoria[i];
        memoria[i] = f(i);
        return memoria[i];
    }
    return fm;
}

var fib = memorizar(function (i) {
    if(i < 2) return 1;
    return fib(i -1) + fib(i - 2);
});

console.log(fib (1000));