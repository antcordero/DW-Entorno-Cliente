//Conventir funciones JavaScript en funciones TypeScript

//Función 1 - Versión sin tipos
/*
function logMensaje(msg) {
    console.log(msg);
}
*/

//Función 1 - en TypeScript
function logMensaje(msg: String): void {
    console.log(msg);
}