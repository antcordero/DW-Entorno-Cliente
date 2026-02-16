// arary de objetos con nombre y edad

interface Persona {
    nombre: string;
    edad: number;
}

let personas: Persona[] = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

personas.sort((a, b) => a.edad - b.edad);
console.log(personas);