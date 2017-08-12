class Persona {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saluda(alguien = "extraño") {
        this.edad = 20;
        console.log("Hola,", alguien, "me llamo", this.nombre);
    }
}

let p = new Persona("Jorge", "Ramón");
p.saluda();


class Figura {
    constructor(lados) {
        this.lados = lados;
    }
}

class Cuadrado extends Figura {

    constructor() {
        super(4);
    }
}

let c = new Cuadrado();
console.log("Cuadrado tiene", c.lados, "lados");