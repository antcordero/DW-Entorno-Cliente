let pregunta1 = document.getElementById("p1");
let botones1 = document.querySelectorAll(".btn1");

function cambiarColor(boton) {
    if (boton.value === "verdadero") {
        pregunta1.style.color = "green";
    } else {
        pregunta1.style.color = "red";
    }
}

// Asignamos el event listener usando la función
botones1.forEach(boton => {
    boton.addEventListener("click", () => cambiarColor(boton));
});

