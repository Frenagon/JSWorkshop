////Funcion como Valor
let launchMissiles = function() {
  console.log("BOOOOM!!");
}

let safeMode = true;
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}

launchMissiles();