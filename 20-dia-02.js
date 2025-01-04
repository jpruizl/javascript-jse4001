// ciclo do...while

// Ej.2
// let isOver;
// let counter = 1;

// do {
//     isOver = !confirm(`[${counter++}] ¿continuar en el bucle`);
// } while (!isOver);


// Ej.3
let condition = false;

console.log('while');
while (condition) {
    console.log('Una iteración del bucle while');
}

console.log('do while');
do {
    console.log('una iteración del bucle do...while');
} while (condition);