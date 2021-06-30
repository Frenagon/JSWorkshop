////Length
let sentence = "Tres tristes tigres";
console.log(sentence.length);


////toUpperCase/toLowerCase
let title = "Los Piratas del Caribe";
console.log(title.toUpperCase());
console.log(title.toLowerCase());


////indexOf
console.log("toronjas".indexOf("n"));
// → 4
console.log("toronjas".indexOf("jas"));
// → 5


////slice [)
console.log("toronjas".slice(0, 4));
// → toro


////trim
console.log("  okay \n ".trim());
// → okay


////padStart
console.log("6".padStart(3, "0"));
// → 006


////split
let longSentence = "La razon de la sinrazon que a mi razon se hace...";
let words = longSentence.split(" ");
console.log(words);
// → ["La", "razon", "de", "la", "sinrazon", "que", "a", "mi", "razon", "se", "hace..."]
console.log(words.join(". "));
// → La. razon. de. la. sinrazon. que. a. mi. razon. se. hace...


////repeat
console.log("LA".repeat(3));
// → LALALA


////Caracter individual
let string = "abc";
console.log(string[1]);
// → b