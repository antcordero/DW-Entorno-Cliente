//Parte 3
var mensaje = document.getElementById("pParte1");
var botones = document.querySelectorAll("button");

function mostrarMensaje() {
  var idioma=this.innerHTML;

  if (idioma==='Español') {
    document.write("<p>Bienvenido</p>");
  } else if (idioma==='Inglés') {
   document.write("<p>Welcome</p>");
  } else if (idioma==='Ruso') {
    document.write("<p>Добро пожаловать</p>");
  }
}

for (var i=0; i<botones.length; i++) {
  botones[i].addEventListener('click', mostrarMensaje);
}