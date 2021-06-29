////
// let pokemons = ["Pikachu", "Charmander", "Bulbasaur"];

// alert(pokemons.length);

////push/pop
// let trainers = ["Ash", "Misty"];

// alert(trainers.length);

// trainers.push("Brook");
// alert(trainers);

// alert(trainers.pop());
// alert(trainers);


////unshift/shift
// let pokemons = ["Pikachu", "Charmander", "Bulbasaur"];

// alert(pokemons.length);

// pokemons.unshift("Squirtle");
// alert(pokemons);

// alert(pokemons.shift());
// alert(pokemons);


////indexOf
// let pokemons = ["Pikachu", "Charmander", "Pikachu", "Bulbasaur"];

// alert(pokemons.indexOf("Pikachu"));
// alert(pokemons.indexOf("Pickachu"));
// alert(pokemons.lastIndexOf("Pikachu"));


////slice [)

// let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

// alert(pokemons.slice(1, 3));
// alert(pokemons.slice(1));


////concat
// let pokemons = ["Pikachu", "Charmander"];

// alert(pokemons.concat(["Bulbasaur", "Squirtle"]));

////remove function using concat and slice
// let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// }

// alert(remove(pokemons, 1));


////join
let pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

alert(pokemons.join(";"))