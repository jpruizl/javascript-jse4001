// funciones, cotinuación
// Ej.3
console.log("Comencemos:");
console.log("Hola");
console.log("Mundo");
console.log("y otra vez:");
console.log("Hola");
console.log("Mundo");
console.log("y una vez más:");
console.log("Hola");
console.log("Mundo");


// Ej.4
function testFunction() {
    console.log("Hola");
    console.log("Mundo");
}

console.log("Comencemos");
testFunction();
console.log("y otra vez:");
testFunction()
console.log("y una vez más:");
testFunction()


// Ej.5
var globalGreeting = "Buenos";

function testFunction() {
    var localGreeting = "Días";
    console.log("Función:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("Programa Principal:");
console.log(globalGreeting);
console.log(localGreeting);