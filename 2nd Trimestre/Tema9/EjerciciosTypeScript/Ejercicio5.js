"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restar = (a, b) => a - b;
const dividir = (a, b) => {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
};
console.log(restar(10, 4));
console.log(dividir(20, 5));
//# sourceMappingURL=Ejercicio5.js.map