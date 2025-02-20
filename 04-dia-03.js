// Sombreado

// Ej.1 sin sombreado
let counter = 100;
console.log(counter); // -> 100
{
    counter = 200;
    console.log(counter); // -> 200
}
console.log(counter); // -> 200

// Ej.2
let counter = 100;
console.log(counter); // -> 100
{
    let counter = 200;
    console.log(counter); // -> 200
}
console.log(counter); // -> 100

// Ej.3
var counter = 100;

function testFunction() {
    var counter = 200;
    console.log(counter); // -> 200
}

console.log(counter); // -> 100
testFunction();
console.log(counter); // -> 100