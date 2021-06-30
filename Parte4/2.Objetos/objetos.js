////Objetos
let numbers = {
  one: 1,
  two: 2,
  "three and four": [3, 4]
}

console.log(numbers.one);
console.log(numbers["three and four"]);


////Delete
let anObject = {left: 1, right: 2};

console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


////Keys
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]


////Assign
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}