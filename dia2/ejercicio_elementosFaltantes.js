var x = [3, 4, 5, 8, 10, 15];

function numbers(xx){
  return (Math.max.apply( Math, xx ) - Math.min.apply( Math, xx ) - xx.length + 1);
}

console.log("Faltantes =",numbers(x));