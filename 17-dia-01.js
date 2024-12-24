// Ejecución condicional

// La instrucción if
// Ej.1
//if (condición) {
//   bloque de código
//}

// Ej.2  CTRL + K Documenta el bloque
// let isUserReady = confirm("¿Estás listo?");
// console.log(isUserReady);
// if (isUserReady) {
//     alert("Estoy listo");
// }
// alert("Siempre pasa por aquí");

// Ej.3
// let isUserReady = confirm("Estas listo?");

// if (isUserReady) {
//     alert("Estoy listo");
//     alert("Estoy listo 2");
// }


// Ej.4
// let unitPrice = 10;
// let pieces = prompt("¿Cuántas puezas se ordenaron?", 0);
// if (pieces > 0) {
//     let total = unitPrice * pieces;
//     alert(`El total a pagar es: ${total}`);
// }
// console.log(total); 


// Ej.5
let userAge = 22;
let isFemale = false;
let points = 700;
let cartValue = 301;
let shippingCost = 9.99;

// if (userAge > 21) {
//     if (cartValue >= 300 || points > 500) {
//         shippingCost = 0;
//     }
// }

if (userAge > 21 && (cartValue >= 300 || points > 500)) {
    shippingCost = 0;
}


alert(`El costo de envío es: ${shippingCost}`);