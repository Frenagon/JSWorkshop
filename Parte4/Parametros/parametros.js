////Parametros
const showStarters = function (starter1, starter2, starter3) {
  let message = "Select One:\n" +
                "1. " + starter1 + "\n" +
                "2. " + starter2 + "\n" +
                "3. " + starter3 + "\n";
  
  alert(message);
}
showStarters("Charmander");

////Parametros opcionales
// const showStarters = function (starter1 = "Charizard",
//                                starter2 = "Squirtle",
//                                starter3 = "Bulbasaur") {
//   let message = "Select One:\n" +
//                 "1. " + starter1 + "\n" +
//                 "2. " + starter2 + "\n" +
//                 "3. " + starter3 + "\n";
  
//   alert(message);
// }
// showStarters();