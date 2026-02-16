let numeros: Array<number> = [1, 2, 3, 4, 5, 2, 3, 4];
function encontrarDuplicados(arr: number[]): number[] {
    let duplicados: number[] = [];
    let vistos: { [key: number]: number } = {};

    for (let num of arr) {
        if (vistos[num] && !duplicados.includes(num)) {
            duplicados.push(num);
        } else {
            vistos[num] = 1;
        }
    }

    return duplicados;
}
let resultado = encontrarDuplicados(numeros);
console.log("Elementos duplicados:", resultado);
