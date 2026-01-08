//Parte 1
var mensaje = document.getElementById("pParte1");
var botones = document.querySelectorAll("button");

function mostrarMensaje() {
  var idioma=this.innerHTML;

  if (idioma==='Español') {
    window.alert('Bienvenido');
  } else if (idioma==='Inglés') {
    window.alert('Welcome');
  } else if (idioma==='Ruso') {
    window.alert('добро пожаловать');
  }
}

for (var i=0; i<botones.length; i++) {
  botones[i].addEventListener('click', mostrarMensaje);
}