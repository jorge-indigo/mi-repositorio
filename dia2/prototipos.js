function Persona() {
    this.nombre = "Jorge";
}

Persona.prototype.saluda = function (nombre) {
    console.log("Hola,", nombre, "me llamo", this.nombre);
}

let p = new Persona();
p.saluda("Emanuel");

let q = new Persona();
q.saluda("David");


Persona.prototype.beber = function () { console.log("glug glug glug...") };

p.beber();
q.beber();


String.prototype.repeat = function (n) {
    let cadena = this;
    for(let i = 0; i < n; i++) {
        cadena += cadena;
    }
    return cadena;
}

console.log("hola".repeat(10))
