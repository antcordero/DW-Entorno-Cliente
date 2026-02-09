fetch("https://lopegonzalez.es/servicios/vehiculos.php?matricula=1702TGG")
  .then(respuesta => respuesta.text())
  .then(textoDevuelto => {
    console.log(textoDevuelto);
  })
  .catch(error => {
    console.log(error);
  });
