var btnCalculo = document.getElementById("calcularIMC");

function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    //calculo del IMC
    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    if (imc < 18.5) {
        resultado = "Tu IMC es: " + imc + ". Clasificación: Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = "Tu IMC es: " + imc + ". Clasificación: Peso normal";
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado = "Tu IMC es: " + imc + ". Clasificación: Sobrepeso";
    } else if (imc => 30) {
        resultado = "Tu IMC es: " + imc + ". Clasificación: Obesidad";
    } else {
        resultado = "ERROR en el cálculo";
    }

    document.getElementById("resultado").innerText = resultado;
}

btnCalculo.addEventListener("click", calcularIMC);