let boton1 = document.getElementById("btn-open");
let boton2 = document.getElementById("btn-open-p");
let boton3 = document.getElementById("btn-alert");
let boton4 = document.getElementById("btn-confirm");
let boton5 = document.getElementById("btn-prompt");

//Funciones
function funcionBoton1 () {
    window.open("https://www.google.com/?hl=es");
}
function funcionBoton2 () {
    window.open("https://www.google.com/?hl=es", "_blank", "width=250, height=400");
}
function funcionBoton3 () {
    window.alert("Hola");
}
function funcionBoton4 () {
    window.confirm("Confirmado");
}
function funcionBoton5 () {
    let cadena = window.prompt("Cadena: ");
    if (cadena != null) {
        document.write("No has introducido una cadena de texto");
    } else {
        document.write("Datos escritos: " + cadena);
    }
}

boton1.addEventListener("click", funcionBoton1);
boton2.addEventListener("click", funcionBoton2);
boton3.addEventListener("click", funcionBoton3);
boton4.addEventListener("click", funcionBoton4);
boton5.addEventListener("click", funcionBoton5);