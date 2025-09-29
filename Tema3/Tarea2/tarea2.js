
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

//escribir array por pantalla
document.write("Lista de números introducidos:<br>");
document.write("Array: " + miArray + "<br>");

//en orden de menor a mayor
document.write("El array creado es:<br>");
var menor = 1;
let nuevoArray = [];
for (let i = 0; i < miArray.length; i++) {
    if (miArraay[1] < menor) {
        menor = miArray[i];
        nuevoArray.unshift(menor);
    } else {
        nuevoArray.push(miArray[i]);
    }
}

document.write("Array ordenado de menor a mayor: " + nuevoArray + "<br>");
