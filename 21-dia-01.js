// Bucles y arreglos

// Ej.1 
// let names = [];
// let isOver = false;

// while (!isOver) {
//     let name = prompt("Ingrese otro nombre o presiona Cancelar.");
//     if (name != null) {
//         names.push(name);
//     } else {
//         isOver = true;
//     }
// }

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// Ej.2
// let values = [10, 30, 50, 100, 150];

// console.log('++');
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }

// console.log();

// console.log('--');
// for (let i = values.length - 1; i > 0; i--) {
//     console.log(values[i]);
// }

// console.log();

// console.log('+=2');
// for (let i = 0; i < values.length; i+=2) {
//     console.log(values[i]);
// }


// Ej.3
// let values = [10, 30, 50, 100];
// let sum = 0;

// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }

// console.log(sum);

// // Ej.4
// console.log();
// sum = 0;

// for (let number of values) {
//     sum += number;
// }

// console.log(sum);


// Ej.6
// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cairo", population: 18.82e6 },
//     { name: "Mumbai", population: 19.32e6 },
//     { name: "SÃ£o Paulo", population: 20.88e6 },
//     { name: "Mexico City", population: 21.34e6 },
//     { name: "Shanghai", population: 23.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 }   
// ];

// for (let city of cities) {
//     if (city.population > 35e6) {
//         console.log(`${city.name} (${city.population})`);
//     }
// }


// Ej.7a
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key);
};

console.log();


// Ej.8
console.log(user.name);
// console.log(user[name]); // no llega a la definición.

console.log();

// Ej.9
for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};