function variableGlobal() {
    var p;

    p = 10;

    let imprime10 = (function() {
        let q = p;
        return function() { console.log(q); };
    })();

    p = 100;

    let imprime100 = (function () {
        let q = p;
        return function() { console.log(q); };
    })();

    p = 1000;

    let imprime1000 = (function () {
        let q = p;
        return function() { console.log(q); };
    })();

    imprime1000();// Debe imprimir 1000
    imprime10(); // Debe imprimir 10
    imprime100(); // Debe imprimir 100
}

variableGlobal();