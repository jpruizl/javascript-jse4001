// Operadores de asignación

// Ej.1
const nu1 = "Alice";
console.log(nu1);

// Ej.2
let year = 2050;
let newYear = year = 2051;
console.log(newYear);

// Ej.3
let year2 = 2050;
year2 = 2051;
let newYear2 = year2;
console.log(newYear2);
console.log();

// Operadores aritméticos
// Ej.4
console.log(2 + 2 * 2); 
console.log(2 + (2 * 2));
console.log((2 + 2) * 2);
console.log();

// Ej.5
const x = 5;
const y = 2;

console.log("suma: ", x + y); //7
console.log("resta: ", x - y); //3
console.log("multiplicación: ", x * y); //10
console.log("división: ", x / y); //2.5
console.log("resto: ", x % y);//1
console.log("potencia: ", x ** y);//25
console.log();

// Ej.6
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`);
console.log(`${n1} : ${typeof n1}`);
console.log(`${n2} : ${typeof n2}`);
console.log(`${n3} : ${typeof n3}`);
console.log(`${n4} : ${typeof n4}`);
console.log();

// Ej.7
let num1 = 10;

console.log(num1++);
console.log(num1);

console.log();

// Ej.8
num1 = 10;
console.log(num1);
num1 = num1 + 1;

console.log();

// Ej.9
num1 = 10;

console.log(++num1);

console.log();

// Ej.10
num1 = 10;
num1 = num1 + 1;
console.log(num1);

console.log();

// Ej.11
console.log(0.2 + 0.1);
console.log(0.2 * 0.1);
console.log(0.3 / 0.1);

console.log();

// Ej.12
// Operadores de Asignación binarios Compuestos
let xx = 100;
xx += 100;
console.log(xx);

xx = 10;
xx += 2;
console.log(xx);
xx -= 4;
console.log(xx);
xx *= 3;
console.log(xx);
xx /= 6;
console.log(xx);
xx **= 3;
console.log(xx);
xx %= 10;
console.log(xx);