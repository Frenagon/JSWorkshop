////Desestructuración de arreglos
function showAttacks([attack1, attack2, attack3, attack4]) {
  message = `Select an Attack:\n` +
            `1. ${attack1}\n` +
            `2. ${attack2}\n` +
            `3. ${attack3}\n` +
            `4. ${attack4}`;
  alert(message);
}

let attacks = ["Thunder Wave", "Quick Attack", "Tail Whip", "Thunder Shock"];
showAttacks(attacks);


////Desestructuración de objetos
function getPresentation({name, city}) {
  return `Hello, I'm ${name} from ${city}!!`;
}

let trainer = {
  name: "Ash Ketchum",
  age: 10,
  city: "Palet Town"
}

alert(getPresentation(trainer));