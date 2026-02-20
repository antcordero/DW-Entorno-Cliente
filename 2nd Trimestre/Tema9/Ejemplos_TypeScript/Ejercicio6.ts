//Crear interface Persona(nombre) y la interface Empleado que extiende de Persona (salario)

//interace Persona
interface Persona {
    nombre: string;
    edad: number;
}

//interface Empleado que extiende de Persona
interface Empleado extends Persona {
    salario: number;
}

const e1: Empleado = { nombre: "Juan", edad: 30, salario: 3000 };
console.log(e1);
