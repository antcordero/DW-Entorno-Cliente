let boton = document.querySelector("#youtube");

function funcionBoton () { 
    if (window.confirm("¿Ir a Youtube?")) {
        window.location = "https://www.youtube.com/";
    } else {
        window.alert("No se redireccionó a youtube");
    }
}

boton.addEventListener("click", funcionBoton);