//Async/Await
function getPokemonInfo(pokemon) {
  return new Promise((resolve, reject) => {
    if (pokemon != "Pikachu") {
      reject("No conozco a ese Pokemon");
    }
    resolve({ name: pokemon, num: 25 });
  })
}

async function nextEvolution(pokemonNum) {
  return { name: "Raichu", num: pokemonNum + 1};
}

// getPokemonInfo("Charmander")
//   .then(pokemon => console.log("Se obtuvo la info de " + pokemon.name))
//   .catch(reason => {
//     console.log("No se encontro al Pokemon por la razon: " + reason)
//     return { name: "Pikachu" };
//   })
//   .then(savedPokemon => console.log("Se obtuvo la info de " + savedPokemon.name));

// nextEvolution(25)
//   .then(pokemon => console.log("La evolucion es: " + pokemon.name));

async function nextEvolutionByName(pokemon) {
  let pokemonInfo = await getPokemonInfo(pokemon);
  let evolution = await nextEvolution(pokemonInfo.num);
  return evolution;
}

let pokemon = "Pikachu";
nextEvolutionByName(pokemon)
  .then(evolution => console.log(`La evolucion de ${pokemon} es ${evolution.name}`));