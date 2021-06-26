////Closure
function savePokemon(pokemon) {
  let save = pokemon;
  return () => save;
}

let firstSave = savePokemon("Squirtle");
let secondSave = savePokemon("Bulbasaur");

alert(firstSave());
alert(secondSave());