// Ej.7
let price = 100;
let shippingCost;

if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}

console.log(`price = ${price}, shipping = ${shippingCost}`);

// Ej.8
let price2 = 100;
let shippingCost2 = price2 > 50 ? 0 : 5;

console.log(shippingCost2);

// Ej.9
let start = confirm("¿Iniciar?");
start ? alert("Aquí vamos!") : console.log('Abortado');

// Ej.10
let inicio = confirm("¿Iniciar?");
let mensaje = inicio ? "Aquí vamos" : 'Abortado';
alert(mensaje);

console.log();
console.log();