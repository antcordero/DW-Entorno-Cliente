var mensaje = "Hola, ¿cómo te llamas?";
var nombre = prompt(mensaje);

console.log("El nombre del ususario es: " + nombre);

var mensaje2 = prompt("¿Quieres abandonar la página? (ACEPTAR/CANCELAR)");

console.log("El usuario " + nombre + " ha elegido: " + mensaje2);

console.log("%cFIN DEL PROGRAMA", "color: blue; font-weight: bold; text-decoration: underline;");