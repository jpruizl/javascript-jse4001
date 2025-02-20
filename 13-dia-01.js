// Operadores Lógicos
// Ej.1 - AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log((15 > 10) && (5 > 20));

// Ej.2 - OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Ej.3 - NOT
console.log(!true);
console.log(!false);

// Ej.4
const a = false;
const b = true;
const c = false;
const d = true;

console.log(a && b && c || d);
console.log(a && b && (c || d));

// Operadores lógicos y valores no booleanos
// Ej.5
let nr = 0;
let year = 1970;
let nombre = 'John';
let empty = "";

console.log(!nr);
console.log(!year);
console.log(!nombre);
console.log(!empty);

console.log(!!nr);
console.log(!!nombre);

// Ej.6
console.log(true && 1981);
console.log(false || 1981);
console.log(2 && 5);
console.log(0 && 5);
console.log("Alice" || "Bob");
console.log("" || "Bob");
console.log("Bob" || "Alice");

console.log(true || 1981);
console.log(false || 1981);
console.log(2 || 5);
console.log(0 || 5);
console.log("Alice" && "Bob");
console.log("" && "Bob");
