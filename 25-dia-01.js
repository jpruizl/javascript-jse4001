// Sombreado
// Ej.1
function add(first, second) {
    return first + second;
}

let first = 10;
    second = 20;
    third = 30;
    fourth = 40;

console.log(add(first, second));
console.log(add(second, third));
console.log(add(third, fourth));

console.log();

// Ej.2
let a = 100,
    b = 200,
    c = 300;

function test(a) {
    let b = 10;
    console.log(a);
    console.log(b);
    console.log(c);
}

test(1);

console.log(a);
console.log(b);
console.log(c);
