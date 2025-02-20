// Hoisting

// Ej.1
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 70;
console.log(weight); // -> 70

// Ej.2
var weight;
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
weight = 70;
console.log(weight); // -> 70