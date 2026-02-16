//Implementa en TypeScript una función calcularMedia que reciba cualquier cantidad de números y devuelva la media.
const calcularMedia = (...numeros: number[]): number => {
    if (numeros.length === 0) {
        throw new Error("No se proporcionaron números");
    }
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
};
console.log(calcularMedia(1, 2, 3, 4, 5));