// Parámetros

// Ej.1 - sintaxis
function add(first, second) {
    return first + second;
}

// Ej.2
let result = add(5, 7);
console.log(result);

let result2 = add(10, 15);
console.log(result2);

let result3 = add("Hola", "Mundo");
console.log(result3);

console.log();

// Ej.3
function getElement(elements, index) {
    return elements[index];
}

// Ej.4
let nombres = ['alice', 'bob', 'eve', 'john'];
let nombre = getElement(nombres, 2);
console.log(nombre);

console.log();

// Ej.5
function getMeanTemp(temperatures) {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

let day20012025 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13,
    15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16
];
mediaDay20012025 = getMeanTemp(day20012025);
console.log(`mean: ${mediaDay20012025}`);

let day21012025 = [17, 16, 14, 12, 10, 10, 10, 11, 13,
    14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16
];
console.log(`mean: ${getMeanTemp(day21012025)}`);
