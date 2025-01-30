// Funciones como miembro de primera clase

// Ej.1
function showMessage(message) {
    console.log(`Message: ${message}`);
}

let sm = showMessage;


// Ej.2
sm("!Esto funciona!");
console.log(typeof sm);

console.log();


// Ej.3
function doNothing() {
    return undefined;
}

let a = doNothing();
let b = doNothing;

console.log(typeof a);
console.log(typeof b);


console.log();


// Ej.4
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20));
console.log(operation(multiply, 10, 20));