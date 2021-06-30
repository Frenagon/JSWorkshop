////Fetch
let pokemonName = prompt("¿Escribe el nombre de un Pokemon?");
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Fallo al encontrar al Pokemon "${[pokemonName]}"`);
    }
  })
  .then(pokemon => console.log(pokemon.name + "\n" + pokemon.sprites.front_default))
  .catch(reason => console.log("No se encontro el Pokemon: " + reason));