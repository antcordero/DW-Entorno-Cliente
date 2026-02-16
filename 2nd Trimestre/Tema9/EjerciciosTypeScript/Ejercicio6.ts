//Crea en TypeScript una función genérica repetir que reciba un valor de tipo genérico T 
// y una cantidad n, y devuelva un array con el valor repetido n veces.
const repetir = <T>(valor: T, n: number): T[] => {
    return Array(n).fill(valor);
};
console.log(repetir("Hola", 3));
console.log(repetir(5, 4));
