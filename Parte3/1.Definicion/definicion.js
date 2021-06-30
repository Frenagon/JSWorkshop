////declarada
function square(x) {
  return x * x;
}
console.log(square(12));


////variable
const cube = function(x) {
  return x * x * x;
};
console.log(cube(12));


////flecha
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(10, 2));

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
console.log(square2(12));