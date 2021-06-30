////Rest parameters
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9


////Spread operator
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

let words = ["razon", "de", "la"];
console.log(["la", ...words, "sinrazon"]);
// → ["la", "razon", "de", "la", "sinrazon"]