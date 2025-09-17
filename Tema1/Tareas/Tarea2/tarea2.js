//Pregunta 1
var p1 = document.getElementById("pregunta1");

function comprobarRespuesta1(respuesta) {
  var resultado1 = document.getElementById("resultado1");

  if (respuesta === "verdadero") {
    p1.style.color = "red";
    p1.style.fontWeight = "bold";
    resultado1.textContent = "Respuesta incorrecta";
    resultado1.style.color = "red";
  } else {
    p1.style.color = "green";
    p1.style.fontWeight = "bold";
    resultado1.textContent = "Respuesta correcta";
    resultado1.style.color = "green";
  }
}

//Pregunta 2
var p2 = document.getElementById("pregunta2");

function comprobarRespuesta2(respuesta) {
  var resultado2 = document.getElementById("resultado2");

  if (respuesta === "verdadero") {
    p2.style.color = "green";
    p2.style.fontWeight = "bold";
    resultado2.textContent = "Respuesta correcta";
    resultado2.style.color = "green";
  } else {
    p2.style.color = "red";
    p2.style.fontWeight = "bold";
    resultado2.textContent = "Respuesta incorrecta";
    resultado2.style.color = "red";
  }
}

//Pregunta 3
var p3 = document.getElementById("pregunta3");

function comprobarRespuesta3(respuesta) {
  var resultado3 = document.getElementById("resultado3");

  if (respuesta === "verdadero") {
    p3.style.color = "red";
    p3.style.fontWeight = "bold";
    resultado3.textContent = "Respuesta incorrecta";
    resultado3.style.color = "red";
  } else {
    p3.style.color = "green";
    p3.style.fontWeight = "bold";
    resultado3.textContent = "Respuesta correcta";
    resultado3.style.color = "green";
  }
}

//Pregunta 4
var p4 = document.getElementById("pregunta4");

function comprobarRespuesta4(respuesta) {
  var resultado4 = document.getElementById("resultado4");

  if (respuesta === "verdadero") {
    p4.style.color = "green";
    p4.style.fontWeight = "bold";
    resultado4.textContent = "Respuesta correcta";
    resultado4.style.color = "green";
  } else {
    p4.style.color = "red";
    p4.style.fontWeight = "bold";
    resultado4.textContent = "Respuesta incorrecta";
    resultado4.style.color = "red";
  }
}
