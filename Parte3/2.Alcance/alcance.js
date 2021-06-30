////alcance
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40


////alcance con mismo nombre
let n = 10;
const halve = function(n) {
  return n / 2;
};

console.log(halve(100));
// → 50
console.log(n);
// → 10