var btn = document.getElementById("btn");
var foto = document.getElementById("foto");

function cambiarFoto() {
    if (img.src.match("1.jpg")) {
        img.src = "../Tarea1/img/2.jpg";
    } else if (img.src.match("2.jpg")) {
        img.src = "../Tarea1/img/3.jpg";
    } else if (img.src.match("3.jpg")) {
        img.src = "../Tarea1/img/4.jpg";
    } else if (img.src.match("3.jpg")) {
        img.src = "../Tarea1/img/4.jpg";
    } else if (img.src.match("4.jpg")) {
        img.src = "../Tarea1/img/1.jpg";
    } 
}

btn.addEventListener("click", cambiarFoto);