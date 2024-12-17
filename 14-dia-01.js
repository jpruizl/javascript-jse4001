// Operadores lógicos y valores booleanos, continuación...

// Ej.7
let x = 0;
let y = 0;
console.log(x++ && y++); 
console.log(x); 
console.log(y);

// Ej.8
let a = true;
console.log(a);
a &&= false;
console.log(a);

// Ej.9
let b = false;
console.log(b);
b ||= true;  // b = b || true;
console.log(b);


// Operadores de cadena
// Ej.1 
let greetings = "Hi";
console.log(greetings + " " + "Alice");
console.log(greetings + "Alice");

let sentence = "Happy New Year";
let newSentence = sentence + 10191;
console.log(newSentence);
console.log(typeof newSentence);


// Ej.2
let sentence2 = "Happy New";
sentence2 += " Year ";
sentence2 += 2025;
console.log(sentence2);

// Operadores de comparación
// Ej.3
console.log(10 === 5);
console.log(10 === 10);
console.log(10 === 10n);
console.log(10 === "10");
console.log("10" === "10");
console.log("Alice" === "Bob");
console.log(0 === false);
console.log(undefined === false);

// Ej.4
console.log(10 == 5);
console.log(10 == 10);
console.log(10 == 10n);
console.log(10 == "10");
console.log("10" == "10");
console.log("Alice" == "Bob");
console.log(0 == false);
console.log(undefined == false);

// Ej.5
console.log(10 !== 5);
console.log(10 !== 10);
console.log(10 !== 10n);
console.log(10 !== "10");
console.log("10" !== "10");
console.log("Alice" !== "Bob");
console.log(0 !== false);
console.log(undefined !== false);

// Ej.6
console.log(10 != 5);
console.log(10 != 10);
console.log(10 != 10n);
console.log(10 != "10");
console.log("10" != "10");
console.log("Alice" != "Bob");
console.log(0 != false);
console.log(undefined != false);


// Ej.7
console.log(10 > 100);
console.log(101 > 100);
console.log(101 > "105");

console.log(101 < 100);
console.log(101n < 105);
console.log("10" < 20n);

console.log(101 <= 100);
console.log(101 >= 101);
