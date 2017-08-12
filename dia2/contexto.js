function Persona() {
    this.apellido = "Ramón";
    this.nombre = "Jorge";

    this.saluda = function (nombre) { 
        setTimeout(() => {
            console.log("Hola,", nombre, "me llamo", this.nombre) 
        }, 3000);
    };
}

let p = new Persona();
p.saluda("Emanuel");