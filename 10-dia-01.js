// Arrays continuación

// Ej.1
let animales = [];
console.log(animales);
console.log(animales[0]);

animales[0] = "Perro";
animales[2] = "Gato";

console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);

animales[1] = "Hormiga";
console.log(animales);

console.log();

// Ej.2
// arreglos de diferentes tipos
let values = ["Test", 7, 12.3, false];
let UsuarioTarjeta = ["Nombre", "Apellido", 50, 100000, 30400.50, "A", 15, true];

console.log();

// Ej.3
// arreglos sobre arreglos (aninados)
let names = [
    ["Olivia", "Emma", "Mia", "Sofia"],  
    ["William", "James", "Daniel"]
];

console.log(names);
console.log(names[0]); 
console.log();
console.log(names[1]);
console.log(names[0][1]);
console.log(names[1][1]);

console.log();
let femaleNames = names[0];
console.log(femaleNames);

console.log();

// Ej.4
// nuevamente redactamos nuestro ejercicio anterior
let user1 = {
  name: "Calvin",
  surname: "Hart",
  age: 36,
  email: "plsgq@example.com"
};

let user2 = {
  name: "Hope",
  surname: "Poppins",
  age: 28,
  email: "plsgq2@example.com"
};

// Ej.5 Usando ahora arrays, mejorando nuestro código
let users = [{
        name: "Calvin",
        surname: "Hart",
        age: 36,
        email: "plsgq@example.com"
    },
    {
        name: "Hope",
        surname: "Poppins",
        age: 28,
        email: "plsgq2@example.com"        
    }
];

console.log(users[0].name); // Calvin
console.log(users[1].surname); // Poppins

console.log();

// Ej.6 - instanceof
let dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dia = "Mon";

console.log(typeof(dias));
console.log(typeof(dia));

console.log(dias instanceof Array);
console.log(dia instanceof Array);

console.log();

// Ej,7 método length
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumeros.length);