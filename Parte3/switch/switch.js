let mensaje = "Escoge a tu Pokemon inicial:\n" +
              "1. Squirtle\n" +
              "2. Charmander\n" +
              "3. Bulbasaur\n"
let opcion = prompt(mensaje);

////if
if (opcion == 1) {
  alert("Elegiste al Pokemon de Agua Squirtle!!");
} else if (opcion == 2) {
  alert("Elegiste al Pokemon de Fuego Charmander!!");
} else if (opcion == 3) {
  alert("Elegiste al Pokemon de Hierba Bulbasaur!!");
} else {
  alert("Elegiste al Pokemon de $%%* MissingNo.");
}


////switch
// switch (opcion) {
//   case "1":
//     alert("Elegiste al Pokemon de Agua Squirtle!!");
//     break;
//   case "2":
//     alert("Elegiste al Pokemon de Fuego Charmander!!");
//     break;
//   case "3":
//     alert("Elegiste al Pokemon de Hierba Bulbasaur!!");
//     break;
//   default:
//     alert("Elegiste al Pokemon de $%%* MissingNo.");
//     break;
// }