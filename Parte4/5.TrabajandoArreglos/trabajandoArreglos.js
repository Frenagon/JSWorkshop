////length
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers.length);


////push/pop
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


////unshift/shift
let todoList = ["Buy groceries", "Clean the kitchen"];

todoList.push("Walk the dog");
console.log(todoList);
console.log(todoList.shift());

console.log(todoList);
todoList.unshift("Fix the window");
console.log(todoList);
console.log(todoList.shift());


////indexOf
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3


////slice [)
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]


////concat
console.log([1, 2, 3].concat([4, 5, 6]));


////Remove function using concat and slice
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]


////Recorrer arreglo con for-of
let arr = [1, 3, 4, 8];
for (let num of arr) {
  console.log(num);
}


////Recorrer objeto con for-of
let obj1 = {
  one: 1,
  two: 2,
  three: 3
};
for (let element of Object.keys(obj1)) {
  console.log(element);
}


////Recorrer objeto con for-in
let obj2 = {
  one: 1,
  two: 2,
  three: 3
};
for (let element in obj2) {
  console.log(element);
}