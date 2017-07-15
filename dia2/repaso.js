// Variables (var, let, const)
var x = 0;
let y = 0;
const z = 0;

// Alcances
(function ejemploDeAlcances() {
    var y1 = 0;

    (function otraFuncion() {
        var x1 = 0;
        console.log("y1", y1);
    })();
})();

if (true) {
    let z1 = 0;
}

// Estructuras de control
if (true) {

} else {

}

let casos = "hola";
switch(casos) {
    case "hola":
        console.log("Me esta diciendo hola");
    break;
    default:
        console.log("otro caso");
}
// Estructuras de repetición
for(let i = 0; i < 10; i++) {}

for(let indice in [1,2,3,4,5]){}

for(let elemento of [1,2,3,4]){}


// Tipos
var todosLosTipos;
todosLosTipos = true;
todosLosTipos = 0;
todosLosTipos = "kjasd";
todosLosTipos = [];
todosLosTipos = {};
todosLosTipos = new Map();
todosLosTipos = new Set();
todosLosTipos = null;
todosLosTipos = undefined;

// Objetos
let ejemploObjeto = {
    propiedad1: "valor1",
    propiedad2: 0,
    [ "propiedad" + 3 ]: "valor3",
    metodo() {
        return "Hago algo"
    } 
}

// Destructuring
let  { propiedad1, propiedad3 } = ejemploObjeto;
[ propiedad3, propiedad1 ] = [ propiedad1, propiedad3 ];
