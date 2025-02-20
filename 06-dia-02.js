// strings

// Ej.1
let country = "Malawi";
let continent = 'Africa';

console.log(country);
console.log(typeof country);

// Ej.2
let message1 = "I'm study JS";
let message2 = 'El tema es "JS" interesante';

// Ej.3
let message3 = 'I\'m\' study JS';
let message4 = "El tema es \"JS\" interesante";

let path = "C:\\Windows";
console.log(path);

// Ej.4
let path2 = "C:\\Windows" - "Windows";
console.log(path2);

let test = "100" - "10";
console.log(test);
console.log(typeof test);

// Ej.5
let path3 = "C:\\" + "Windows";
console.log(path3);

let test2 = "100" + "10";
console.log(test2);
console.log(typeof test2);

// Ej.6
let country = "Malawi";
let continent = "Africa";

let sentence = `${country} se ubica en ${continent}.`;
console.log(sentence);

// Ej.7
console.time();
console.log("probar consola");
console.timeEnd();

// Ej.8
let river = "Mekong";
let character = river.charAt(2);
console.log(character);