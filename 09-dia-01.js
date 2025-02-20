// Tipos de datos complejos

// Objeto
console.log("Ej.1");
let testObj = {};
console.log(typeof testObj);

console.log();

console.log("Ej.2");
let testObj2 = {
  nr: 600,
  str: "text"
}

console.log(testObj2);
console.log(testObj2.str);
console.log(testObj2.nr);

console.log();

console.log("Ej.3");
// Forma tradicional
let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 36;
let email1 = "plsgq@example.com";

let name2 = "Hope";
let surname2 = "Poppins";
let age2 = 28;
let email2 = "plsgq2@example.com";

// forma de objeto
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

console.log(user1.name);
console.log(user2.name);

console.log();

console.log(user1.age);
console.log(user2.age);

user1.age = 67;
console.log(user1.age);

console.log();

console.log(user2.phone);
user2.phone = "904-399-7557";
console.log(user2.phone);

console.log();

delete user2.phone;
console.log(user2.phone);