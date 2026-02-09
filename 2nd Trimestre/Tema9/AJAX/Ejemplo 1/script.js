function cargarDatos() {
    //variable para que haga una petición asíncrona
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        //petición terminada con éxito
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.getElementById('resultado').innerHTML = this.responseText;
            } else {
                document.getElementById('resultado').innerHTML = 'Error: ' + this.status;
            }
        } 
    };

    xhr.open('GET', 'datos.txt', true);
    xhr.send();
}
