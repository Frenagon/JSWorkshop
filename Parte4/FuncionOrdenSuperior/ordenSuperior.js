////Funcion de Orden Superior
function createTeam(name, first, second, third) {
  return () => "Este es el equipo " + name + "!!\n" +
               "1. " + first + "\n" +
               "2. " + second + "\n" +
               "3. " + third + "\n";
}

let teamFire = createTeam("Fuego", "Charmander", "Chimchar", "Torchic");
let teamWater = createTeam("Agua", "Squirtle", "Piplup", "Mudkip");

alert(teamFire());
alert(teamWater());