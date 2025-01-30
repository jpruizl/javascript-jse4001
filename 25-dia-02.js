// Validación de parámetros

// Ej.1
function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return "Error: temperatures is not an array";
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));
console.log(getMeanTemp([10, 20, 30]));

console.log();


// Ej.2
// Recursión

function factorial(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

// console.log(factorial(6));

console.log();

// Ej.3 - Con recursión
function factorial2(n) {
    return n > 1 ? n * factorial2(n - 1) : 1;
}

console.log(factorial2(6));
