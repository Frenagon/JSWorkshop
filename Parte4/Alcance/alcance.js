////alcance
let pokemon
const setName = function (nombre) {
  pokemon = nombre;
  alert(pokemon + " alcance local");
}

setName("Charmander");
//alert(pokemon + " alcance global");

////funcion anidada
const showTeam = function(name) {
  let message = name;
  const addPokemon = function(name, type, level) {
    message += "\nPokemon: " + name +
               "; Tipo: " + type +
               "; Nivel: " + level;
  }

  addPokemon("Charmander", "Fuego", 15);
  addPokemon("Squirtle", "Agua", 13);
  addPokemon("Bulbasaur", "Hierba", 14);

  alert(message);
}

showTeam("Starters");