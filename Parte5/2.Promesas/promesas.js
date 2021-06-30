////Call a Promise
function getPokemonInfo(pokemon) {
  return { name: pokemon };
}

let pokemon = Promise.resolve(getPokemonInfo("Pikachu"));
pokemon.then(pokemon => console.log("Se obtuvo la info de " + pokemon.name));


////Create a Promise
function getPokemonInfo2(pokemon) {
  return new Promise(resolve => {
    resolve({name: pokemon});
  })
}

getPokemonInfo2("Charmander").
  then(pokemon => console.log("Se obtuvo la info de " + pokemon.name));


////Failing a Pomise
function getPokemonInfo3(pokemon) {
  return new Promise((resolve, reject) => {
    if (pokemon != "Pikachu") {
      reject("No conozco a ese Pokemon");
    }
    resolve({ name: pokemon });
  })
}

getPokemonInfo3("Charmander")
  .then(pokemon => console.log("Se obtuvo la info de " + pokemon.name))
  .catch(reason => {
    console.log("No se encontro al Pokemon por la razon: " + reason)
    return { name: "Pikachu" };
  })
  .then(savedPokemon => console.log("Se obtuvo la info de " + savedPokemon.name));