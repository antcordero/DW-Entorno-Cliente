var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");
var opcion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división):");
num1 = parseFloat(num1);
num2 = parseFloat(num2);

var mensaje;

if (opcion == "suma") {
    mensaje = "El resultado de la suma es: " + (num1 + num2);
    //document.getElementById("resultado").innerText = mensaje    
} else if (opcion == "resta") {
    mensaje = "El resultado de la resta es: " + (num1 - num2);
    //document.getElementById("resultado").innerText = mensaje    
} else if (opcion == "multiplicación") {
    mensaje = "El resultado de la multiplicación es: " + (num1 * num2);
    //document.getElementById("resultado").innerText = mensaje    
} else if (opcion == "división") {
    if (num2 !== 0) {
        mensaje = "El resultado de la división es: " + (num1 / num2);
    } else {
        mensaje = "Error: No se puede dividir entre cero.";
    }
}

document.getElementById("resultado").innerText = mensaje;