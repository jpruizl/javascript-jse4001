// Conversiones
const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(1);

console.log(typeof num);
console.log(typeof strFromNum2);
console.log(typeof strFromBool);
console.log(typeof numFromStr);
console.log(typeof boolFromNumber);
console.log(boolFromNumber);

console.log();

// Más conversiones a String
let str = "text";
let strStr = String(str);
console.log(`${typeof str} : ${str}`);
console.log(`${typeof strStr} : ${strStr}`);

console.log();

let nr = 42;
let nrStr = String(nr);
console.log(`${typeof nr} : ${nr}`);
console.log(`${typeof nrStr} : ${nrStr}`);

console.log();

let bl = true;
let blStr = String(bl);
console.log(`${typeof bl} : ${bl}`);
console.log(`${typeof blStr} : ${blStr}`);

console.log();

let bnr = 123n;
let bnrStr = String(bnr);
console.log(`${typeof bnr} : ${bnr}`);
console.log(`${typeof bnrStr} : ${bnrStr}`);

console.log();

let un = undefined;
let unStr = String(un);
console.log(`${typeof un} : ${un}`);
console.log(`${typeof unStr} : ${unStr}`);

console.log();

let n = null;
let nStr = String(n);
console.log(`${typeof n} : ${n}`);
console.log(`${typeof nStr} : ${nStr}`);

console.log();

// Conversiones a Number
console.log(Number(42));
console.log(Number("11"));
console.log(Number("0x11"));
console.log(Number("0o11"));
console.log(Number("0b11"));
console.log(Number("12e3"));
console.log(Number("Infinity"));
console.log(Number("text"));
console.log(Number(14n));
console.log(Number(123456789123456789123n)) // lo volverá un número infinity
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

console.log();

// Conversiones a Boolean
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(42));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean("text"));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log();

// Conversiones a BigInt
console.log(BigInt(11));
console.log(BigInt(0x11));
console.log(BigInt(11e2));
console.log(BigInt(true));
console.log(BigInt("11"));
// console.log(BigInt(null));
// console.log(BigInt(undefined));
// console.log(BigInt(NaN));

console.log();

// Conversiones Implicitas
const str1 = 42 + "1";
console.log(str1);
console.log(typeof str1);

const str2 = 42 - "1";
console.log(str2);
console.log(typeof str2);
