var btn = document.getElementById("btn");
var foto = document.getElementById("foto");

function cambiarFoto() {
    if (foto.src.match("img/1.jpg")) {
        foto.src = "img/2.jpg";
    } else if (foto.src.match("img/2.jpg")) {
        foto.src = "img/3.jpg";
    } else if (foto.src.match("img/3.jpg")) {
        foto.src = "img/4.jpg";
    } else if (foto.src.match("img/4.jpg")) {
        foto.src = "img/1.jpg";
    }
}

btn.addEventListener("click", cambiarFoto);