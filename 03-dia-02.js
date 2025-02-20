// Constantes

// Ej.1
const greeting = "!Hola!";

// Ej.2 y 3
// inmutabilidad de una constante
const greeting;
greeting = "!Mundo!";

// Ej.4
let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    console.log(counter); // -> 1
}
counter = counter + 1;
console.log(counter); // -> 2


// Ej.5
let counter;
console.log(counter); // -> undefined
{
    counter = 1; {
        console.log(counter);
    }
}
counter = counter + 1;
console.log(counter);


// Ej.6
let height = 180; {
    let weight = 70;
    console.log(height);
    console.log(weight);
}
console.log(height);
console.log(weight);


// Ej.7
let height = 200; {
    let weight = 100; {
        let info = "tall";
        console.log(height); // 200
        console.log(weight); // 100
        console.log(info); // tall
    }
    console.log(height); // 200
    console.log(weight); // 100
    console.log(info); // ReferenceError
}