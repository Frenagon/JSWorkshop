////Mutabilidad
let pikachu = { hp: 10 };
let samePikachu = pikachu;
let anotherPikachu = { hp: 10 };

alert(pikachu == samePikachu);
alert(pikachu == anotherPikachu);

////Object binding
const charmander = { hp: 10, atk: 19 };

charmander.hp = 19;
alert(charmander.hp);

charmander = { hp: 19, atk: 25 };
alert(charmander.atk);