"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Crea en TypeScript una función potencia que reciba una base y un exponente, siendo el exponente por defecto 2.
const potencia = (base, exponente = 2) => {
    return Math.pow(base, exponente);
};
console.log(potencia(5));
console.log(potencia(3, 4));
//# sourceMappingURL=Ejercicio3.js.map