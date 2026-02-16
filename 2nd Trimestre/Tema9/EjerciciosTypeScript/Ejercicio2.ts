//Declara en TypeScript una función saludar que reciba un nombre obligatorio 
// y un saludo opcional; si no se indica saludo, usará "Hola".
const saludar = (nombre: string, saludo?: string): string => {
    return `${saludo || "Hola"}, ${nombre}!`;
};
console.log(saludar("Ana"));
console.log(saludar("Pedro", "Buenos días"));