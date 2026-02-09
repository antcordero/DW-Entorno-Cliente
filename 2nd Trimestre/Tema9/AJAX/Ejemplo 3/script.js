document.getElementById('mostrar').addEventListener('click', function (e) {
    e.preventDefault();

    fetch("https://lopegonzalez.es/servicios/vehiculos.php?matricula=1702TGG")
      .then(respuesta => {
        if (respuesta.ok) {
          return respuesta.json();
        }
        throw new Error('Error en la respuesta');
      })
      .then(datos => {
        // Suponiendo un JSON del tipo:
        // { "marca":"Citroën", "modelo":"C4", "color":"#ff0000", "cv":"110", "cilindrada":"cc" }

        const tarjeta = document.getElementById('tarjeta');

        tarjeta.innerHTML = `
          <h2>${datos.marca} ${datos.modelo}</h2>
          <div class="color-caja" style="background-color:${datos.color};"></div>
          <p class="cilindrada">
            ${datos.cv}CV <span>${datos.cilindrada}</span>
          </p>
        `;
      })
      .catch(error => {
        console.log(error);
      });
  });