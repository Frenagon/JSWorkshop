////JSON
let numbers = {
  one: 1,
  two: 2,
  three: 3
}

let JSONString = JSON.stringify(numbers);
console.log(numbers);
console.log(JSONString);
console.log(JSON.parse(JSONString).two);