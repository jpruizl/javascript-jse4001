// Ej.7
console.log("b" > "a"); 
console.log("a" > "B"); 
console.log("B" > "A"); 
console.log("A" > "4"); 
console.log("4" > "1"); 

console.log("ab1" < "ab4");
console.log("ab4" < "abA");

console.log("ab" < "ab4");


// Ej.8
let year = 2021;
console.log(typeof year);
console.log(typeof false);


// Ej.9
let nombres = ["Juan", "Pedro", "Pablo"];
let nombre = nombres[0];
console.log(nombres instanceof Array);
console.log(nombre instanceof Array);


// Ej.10
let user = {
    name: "John",
    age: 30
};

console.log(user.age);
delete user.age;
console.log(user.age);


// Ej.11
console.log(true ? "Alice" : "Bob");
console.log(false ? "Alice" : "Bob");


// Ej.12
let nombre2 = 1 > 2 ? "Alice" : "Bob";
console.log(nombre2);


// Ej.13
// Precedencia
let a = 10;
let b = a + 2 * 3;
let c = a + 2 < 20 - 15;
console.log(a);
console.log(b);
console.log(c);


// Ej.14
let aa, bb;
bb = (aa = (20 + 20) * 2) > (3 ** 2);
console.log(aa);
console.log(bb);