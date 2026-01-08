//Parte 1
var mensaje = document.getElementById("pParte1");
var botones = document.querySelectorAll("button");

function mostrarMensaje() {
  var idioma=this.innerHTML;

  if (idioma==='Español') {
    texto='Bienvenido';
  } else if (idioma==='Inglés') {
    texto='Welcome';
  } else if (idioma==='Ruso') {
    texto='добро пожаловать';
  }

  mensaje.innerHTML = texto;
}

for (var i=0; i<botones.length; i++) {
  botones[i].addEventListener('click', mostrarMensaje);
}