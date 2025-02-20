// Continuidad de Cadenas (String)

// Ej.9
let str = "Java script language";
str2 = str.length;

console.log(str.length);
console.log('test'.length);
console.log(str2);

console.log(str.charAt(0));
console.log('abc'.charAt(1));

console.log(str.slice(0, 4)); // -> Java
console.log('test'.slice(1, 3)); // -> es

console.log(str.split(' '));
console.log('192.168.1.1'.split('.'));


// Tipos de dato: Undefined
// Ej.1 
let declarVar;
console.log(typeof declarVar);

declarVar = 5;
console.log(typeof declarVar);

declaredVar = undefined;
console.log(typeof declaredVar);


// Tipo de dato: null
// Ej.2
let someResource;
console.log(someResource);
console.log(typeof someResource);

someResource2 = null;
console.log(someResource2);
console.log(typeof someResource2);


// Conversión de Tipos de Datos
// Funciones de construcción primitivas
// Ej.3
const str2 = String();
const num = Number();
const bool = Boolean();

console.log(str2);
console.log(num);
console.log(bool);

const big1 = BigInt(42);
console.log(big1);

const big2 = BigInt(); // TypeError.