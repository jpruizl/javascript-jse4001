// métodos continuación
// método indexOf
console.log("Ej.1");
let names = ["Olivia", "Emma", "Mateo", "Samuel", "Emma"];
console.log(names.indexOf("Mateo"));
console.log(names.indexOf("Victor"));
console.log(names.indexOf("Emma", 3));
console.log();

// método push
console.log("Ej.2");
let names2 = ["Olivia", "Emma", "Mateo", "Samuel", "Emma"];
console.log(names2.length)
names2.push("Victor");
console.log(names2.length)
console.log(names2);
console.log();

// método unshift
console.log("Ej.3");
let names3 = ["Olivia", "Emma", "Mateo", "Samuel", "Emma"];
console.log(names3);
names3.unshift("Victor");
console.log(names3);
console.log();

// método pop
console.log("Ej.4");
let names4 = ["Olivia", "Emma", "Mateo", "Samuel", "Emma"];
console.log(names4);
let elemPop = names4.pop();
console.log(names4);
console.log(elemPop);
console.log();

// método shift
console.log("Ej.5");
let names5 = ["Olivia", "Emma", "Mateo", "Samuel", "Emma"];
console.log(names5);
let elemShift = names5.shift();
console.log(names5);
console.log(elemShift);
console.log();

// método reverse
console.log("Ej.6");
let names6 = ["Olivia", "Emma", "Mateo", "Samuel", "Emma"];
console.log(names6);
names6.reverse();
console.log(names6);  
console.log();

// método slice
console.log("Ej.7");
let names7 = ["Olivia", "Emma", "Mateo", "Samuel", "Emma", "Ana"];
console.log(names7);
let n1 = names7.slice(2);
console.log(n1);

let n2 = names7.slice(1, 3);
console.log(n2);

let n3 = names7.slice(0, -1);
console.log(n3);

let n4 = names7.slice(-1);
console.log(n4);

console.log();

// método concat
console.log("Ej.8");
let names8 = ["Olivia", "Emma", "Mateo", "Samuel"];
let names9 = ["Ana", "Victor"];
let names10 = names8.concat(names9);
console.log(names10);
