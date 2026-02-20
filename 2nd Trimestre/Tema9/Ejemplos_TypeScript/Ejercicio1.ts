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

//Función 2 - Versión sin tipos
/*
function fornatCurrecncy(value) {
    return '$' + value.toFixed(2);
}
*/

//Función 2 - en TypeScript
function formatCurrecncy(value:number): string {
    return '$' + value.toFixed(2);
}

//Ejemplo 3 - Versión sin tipos
/*
    var array = [];
    array.push({name: 'hola', 'list': []});
    array[0]['list'].push('list1');
    alert (array[0]['name']);
*/

//Ejemplo 3 - en TypeScript
interface Datos {
    name: string;
    list: string[];
}

const array: Datos[] = [];
array.push({name: 'hola', list: []});
array[0].list.push('list1');
alert (array[0].name);

//Ejemplo 4 - Versión sin tipos
/*
function validarUsuario(usuario) {
    return usuaio.lenght >= 3;
}
*/

//Ejemplo 4 - en TypeScript
/*
interface UsuarioForm {
    nombre: string;
    email: string;
    edad: number;
}

function validarUsuario(usuario: UsuarioForm): boolean {
    return {
        usuario.nombre.length >= 3,
        usuario.email.includes('@'),
        usuario.edad >= 18;
    }
}
*/

function suma(a: number, b:number): number {
    return a + b;
}

function filtrarPares(numeros: number[]): number[] {
    return numeros.filter(num => num % 2 === 0);
}

interface Persona {
    nombre: string;
    edad: number;
}
function crearPersona(nombre: string, edad: number): Persona {
    return {
        nombre: nombre,
        edad: edad
    };
}