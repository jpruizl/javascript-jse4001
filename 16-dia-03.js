// Cuadros de diálogo
// Ej.1
alert("Hola Mundo");
window.alert("Aprendiendo JavaScript, por segunda ocasión");

alert(4 * 5);
alert(true);

alert("texto 1", "texto 2");


// Cuadros de confirmación
// Ej.2
let decision = window.confirm("¿Está bien?");
console.log(decision);

// Ej.3
let remove = confirm("¿Desea eliminar todos los datos?");
let message = remove ? "Datos eliminados" : "Datos no eliminados";
alert(message);
console.log(message);


// Cuadros de ingreso de datos
// Ej.4
let nombre = window.prompt("Ingrese su nombre", "Nombre y Apellido");
nombre = nombre ? nombre : "No ingresó nombre";

let edad = prompt("Hola" + nombre + ", ¿Cuántos años tienes?");
alert(nombre + " tiene " + edad + " años");