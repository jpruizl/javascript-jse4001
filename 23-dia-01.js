// Ej.5
// let nombre = "Alice";

// function showName() {
//     console.log(nombre);
// }

// showName();
// console.log("el programa regresa aqui 1");
// showName();
// console.log("el programa regresa aqui 2");

// Ej.6
let nombre2 = 'Alice';

showName2();

function showName2() {
    console.log(nombre2);
}

console.log('Se regresa a este punto del codigo');


// Ej.7
// let temperatures;
// let meanTemp;

// function getMeanTemp() {
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     meanTemp = sum / temperatures.length;
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`);

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// getMeanTemp();
// console.log(`mean: ${meanTemp}`);

console.log();

// Ej.8
function showMsg() {
    console.log('Mensaje 1');
    return;
    console.log('Mensaje 2');
}

showMsg();

console.log();

// Ej.9
function getTrue() {
    return true;
}

let test = getTrue();
console.log(test);
console.log(typeof(test));

console.log();

// Ej.10
// let temperatures;
// let meanTemp;

// function getMeanTemp() {
//     let sum = 0;
//     let result;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     result = sum / temperatures.length;
//     return result;
// }

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18,
//     21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16
// ];
// meanTemp = getMeanTemp();
// console.log(`mean: ${meanTemp}`);

// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17,
//     22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16
// ];
// meanTemp = getMeanTemp();
// console.log(`mean: ${meanTemp}`);

// Ej.12
let temperatures;

function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13,
    15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16
];
console.log(`mean: ${getMeanTemp()}`);

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13,
    14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16
];
console.log(`mean: ${getMeanTemp()}`);