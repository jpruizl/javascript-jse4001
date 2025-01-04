// bucle while

// Ej.1
// console.log(0);
// console.log(10);
// console.log(20);
// console.log(30);
// console.log(40);
// console.log(50);
// console.log(60);
// console.log(70);
// console.log(80);
// console.log(90);

// console.log();

// // Ej.2
// let n = 0;

// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;
// console.log(n);
// n += 10;

// console.log();

// // Ej.3
// console.log(n);
// n += 10;


// console.log();

// // Ej.4
// let n2 = 0;
// while (n2 < 91) {
//     console.log(n2);
//     n2 += 10;
// }

// console.log();

// Ej.6
// let isOver = false;
// let counter = 1;

// while (isOver != true) {
//     let continueLoop = confirm(`[${counter}] ¿continuar el bucle?`);
//     isOver = continueLoop === true ? false : true;
//     counter = counter + 1;
// }

// Ej.7
let isOver = false;
let counter = 1;

while (!isOver) {
    isOver = !confirm(`[${counter++}] ¿continuar en el bucle?`);
}

