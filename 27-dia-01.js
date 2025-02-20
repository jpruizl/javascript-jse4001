// Callbacks sincronas

console.log('Ej.1')
// let inner = function() {
//     console.log('inner 1');
// }

// let outer = function(callback) {
//     console.log('outer 1');
//     callback();
//     console.log('outer 2');
// }

// console.log('test 1');
// outer(inner);
// console.log('test 2');

console.log();

// console.log('Ej.2')
// let inner = function() {
//     console.log('inner 1');
// }

// let outer = function(callback) {
//     console.log('outer 1');
//     setTimeout(callback, 5000);
//     console.log('outer 2');
// }

// console.log('test 1');
// outer(inner);
// console.log('test 2');

console.log();

console.log('Ej.3')
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000);
    console.log('outer 2');

    setTimeout(function() {
        clearInterval(timerId);
    }, 5000);
}

console.log('test 1');
outer(inner);
console.log('test 2');


console.log();

console.log('Ej.4');

window.addEventListener('click', function() {
    console.log('!Hizo click!');
});
