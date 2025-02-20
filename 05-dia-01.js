// Tipos de Datos y sus Conversiones

// Ej.1 - Literales
let year = 1990;
console.log(year); // -> 1990
console.log(1991); // -> 1991
console.log("Alice"); // -> Alice

// Ej.2 - uso de typeof
let year = 1990;
console.log(typeof year);
console.log(typeof 1991);

let name = "Alice";
console.log(typeof name);
console.log(typeof "Bob");

let typeOfYear = typeof year;
console.log(typeOfYear);
console.log(typeof typeOfYear);


// Ej.3 - Booleanos
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false);
console.log(typeof false);
console.log(isDataValid);
console.log(typeof isDataValid);


// Ej.4 - number
const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year);
console.log(typeof year);
console.log(typeof delayInSeconds);
console.log(typeof area);
console.log(typeof halfArea);


// Ej.5 otros tipos de números
let a = 10; // decimal - default
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary

console.log("Decimal:");
console.log("0 1 2 3 4 5 6 7 8 9");

console.log("Hexadecimal:");
console.log("0 1 2 3 4 5 6 7 8 9 A B C D E F");

console.log("Octal");
console.log("0 1 2 3 4 5 6 7");

console.log("Binario:");
console.log("0 1");

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let x = 9e3;
let y = 123e-5;
console.log(x);
console.log(y);

// Ej.6
let a = 1 / 0;
let b = -Infinity;

console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

let s = "definitivamente no es un núero";
let n = s * 10;
console.log(n);
console.log(typeof n);