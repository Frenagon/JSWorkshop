////Propiedades
let trainers = {
  "Ash Ketchup": ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
  Brook: "Onix",
  Misty: "Togepi"
}

alert(trainers.Brook)
alert(trainers.Misty)
alert(trainers["Ash" + " Ketchup"][2])

////Metodos
let pikachu = {
  hp: 58,
  tailWhip: () => {
    alert("Haz reducido la defensa de tu oponente.");
  },
  thunderShock: () => {
    alert("Haz hecho 38 de daño a tu oponente!!");
  }
}

pikachu.tailWhip();
pikachu.thunderShock();

////Operadores
let ashKetchup = {
  slot1: "Pikachu",
  slot2: "Charmander",
  slot3: "Squirtle"
};

alert(ashKetchup.slot2);
delete ashKetchup.slot2;
alert(ashKetchup.slot2);

alert("slot2" in ashKetchup);
alert("slot1" in ashKetchup);

alert(Object.keys(ashKetchup))

Object.assign(ashKetchup, { slot2: "Bulbasaur", slot3: "Pidgey" });
alert(Object.keys(ashKetchup))
// {
//   slot1: "Pikachu",
//   slot3: "Pidgey",
//   slot2: "Bulbasaur"
// }