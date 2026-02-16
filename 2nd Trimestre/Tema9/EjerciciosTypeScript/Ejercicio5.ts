//Declara en TypeScript un tipo para funciones matemáticas binarias ((a: number, b: number) => number) y úsalo para restar y dividir.
type OperacionBinaria = (a: number, b: number) => number;

const restar: OperacionBinaria = (a, b) => a - b;
const dividir: OperacionBinaria = (a, b) => {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a /b; 
}
console.log(restar(10, 4));
console.log(dividir(20, 5));
