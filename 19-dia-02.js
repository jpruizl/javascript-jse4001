// Switch ... case
let gate = prompt("Elegir la puerta: a, b, o c");
let win = false;

switch (gate) {
    case "a":
        alert('Puerta A: Vacía');
        alert('No has ganado nada!!!')
        alert('Te esperamos en una próxima')
        break;
    case "b":
        alert('Puerta B: Premio mayor');
        win = true;
        break;
    case "c":
        alert('Puerta C: Vacía');
        break;
    default:
        alert('No existe la puerta ' + String(gate));
}

if (win) {
    alert("!Ganador!");
}