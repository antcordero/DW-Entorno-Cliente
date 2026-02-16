//Crea en TypeScript una función potencia que reciba una base y un exponente, siendo el exponente por defecto 2.
const potencia = (base: number, exponente: number = 2): number => {
    return Math.pow(base, exponente);
};
console.log(potencia(5));
console.log(potencia(3, 4));