// Expresiones de funciones

// Ej.1
function add(a, b) {
    return a + b;
}

let myAdd = add;

console.log(myAdd(10, 20));
console.log(add(10, 20));

console.log();


// Ej.2
let myAdd2 = function add2(a, b) {
    return a + b;
}

let add2 = myAdd2; // a investigación
console.log(myAdd2(10, 10));
console.log(add2(10, 10));

console.log();


// Ej.3
let myAdd3 = function(a, b) {
    return a + b;
}

console.log(myAdd3(10, 20));

console.log();


// Ej.4
function operation(func, first, second) {
    return func(first, second);
}

let myAdd4 = function(a, b) {
    return a + b;
}

console.log(operation(myAdd4, 10, 20));

console.log(operation(function(a, b) {
    return a * b;
}, 10, 20));
