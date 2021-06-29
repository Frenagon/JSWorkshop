////JSON
let trainer = {
  name: "Ash Ketchum",
  age: 10,
  city: "Palet Town",
  sayHi: () => "Hi"
}

let trainerJSON = JSON.stringify(trainer);

alert(trainer);
alert(trainerJSON);
alert(JSON.parse(trainerJSON).city);