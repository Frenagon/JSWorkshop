let nombre = "Charmander";
let tipo = "Fuego";
let nivel = 15;

////function keyword
function getNombre() {
  return nombre;
}

////variable
const getTipo = function() {
  return tipo;
}

////arrow function
const getNivel = () => {
  return nivel;
}

alert("El tipo de " + getNombre() +
      " es " + getTipo() +
      " y su nivel es " + getNivel());