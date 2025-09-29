
let miArray = [];
let num = 1;
        
do {
    num = parseInt(prompt("Introduce un número entre 0 y 100 (0 para terminar):"));
    if (num > 0 && num < 50) {
        //al principio
        miArray.unshift(num);
    } else if (num >= 50) {
        //al final
        miArray.push(num);
    }
} while (num !== 0);

//quitar el cero del final
miArray.pop();

//escribir array por pantalla
document.write("Lista de números introducidos:<br>");
document.write("Array: " + miArray + "<br>");

//en orden de menor a mayor
//copia
let nuevoArray = [];
for (let i=0; i < miArray.length; i++) {
    nuevoArray[i] = miArray[i];
}
//ordenar
for (let i=0; i<nuevoArray.length - 1; i++) {
    for (let j=0; j<nuevoArray.length-1-i; j++) {
        if (nuevoArray[j] > nuevoArray[j+1]) {
            let aux = nuevoArray[j];
            nuevoArray[j] = nuevoArray[j+1];
            nuevoArray[j+1] = aux;
        }
    }
}

//imprimir ordenado
document.write("El array creado es: <br>");
for (let i=0; i < nuevoArray.length; i++) {
    document.write(nuevoArray[i] + ", ");
}
