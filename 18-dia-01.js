// instrucción if ... else

// Ej.1
let isUserReady = confirm("¿Estás listo?");

if (isUserReady) {
    console.log("!Usuario listo!");
}

if (isUserReady == false) {
    console.log("!Usuario no esta listo!");
}


// Ej.2 Sintaxis
if (condición) {
    condición se ejecuta si fue verdadera;
} else {
    condición se ejecuta su fue falsa;
}


// Ej.3
let isUserReady = confirm("¿Estás listo?");

if (isUserReady) {
    console.log("!Usuario listo!");
} else {
    console.log("!Usuario no esta listo!");
}


// Ej.4 sintaxis
if (condición_1) {
    code block
} else if (condición_2) {
    code block
} else if (condición_3) {
    code block
} else {
    code block
}


// Ej.5
let number = prompt("Ingresa un número", 0);

if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("< 60");
} else if (number < 90) {
    alert("< 90");
} else if (number < 100) {
    alert("< 100");
} else if (number == 100) {
    alert("100");
} else {
    alert("> 100");
}


// Ej.6
const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 17;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsAproval = true;
let addInsurance = true;

/* calcular costos de envío */
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
    shippingCost = 0;
} else if (userAge < 21 && hasParentsAproval) {
    shippingCost = shippingCost - 5;
} else if (userAge < 21) {
    isOrderValid = false;
}

/* tomar en cuenta la aseguranza */
if (isOrderValid && addInsurance && !hasPromoCode) {
    shippingCost += INSURANCE_COST;
}

/* mostrar mensaje */
if (isOrderValid) {
    console.log(shippingCost);
} else {
    console.log("No se puede ordenar si es menor que 21 años");
}
