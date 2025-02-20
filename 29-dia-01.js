// Errores sin excepciones

// Ej.1
// console.log(100 / 0);
// console.log(100 * "2");
// console.log(100 * "abc");

//  Ej.2 
// console.log(Math.pow("abc", "def"));

// Ej.3
let sX = prompt("Ingrese el primer número");
let sY = prompt("Ingrese el segundo número:");
let x = Number(sX);
let y = Number(sY);

if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y)
} else {
    console.log("Argumentos incorrectos")
}

