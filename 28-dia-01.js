// funciones arrow

// Ej.1 
let add = function (a, b) {
    return a + b;
}

console.log(add(10, 20));


// Ej.2
let add = (a, b) => {
    return a + b;
}

console.log(add(10, 20));


// Ej.3
let add = (a, b) => a + b;

console.log(add(10, 20));

// Ej.4
function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

// Arrow el Ej.4
let factorial2 = n => (n > 1 ? n * factorial2(n - 1) : 1);

console.log(factorial2(5));


// Ej.5
let names = ['Alice', 'Eve', 'John', 'Andrea'];

function showNames(element) {
    console.log(element);
}

names.forEach(showNames);
