////Rest parameters
function makeTeam(...pokemon) {
  return pokemon;
}

// alert(makeTeam("Charmander", "Pikachu", "Squirtle", "Bulbasaur"));


////Spread operator
let pokemon = ["Charmander", "Pikachu", "Squirtle", "Bulbasaur"];

alert(makeTeam(...pokemon, "Pidgey", "Butterfree"));
alert(["Pidgey", ...pokemon, "Butterfree"]);