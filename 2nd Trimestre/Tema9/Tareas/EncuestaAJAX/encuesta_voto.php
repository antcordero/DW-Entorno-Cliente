<?php
    //Se abre el fichero donde estan almacenados los datos
    $fichero = "resultados.txt";  // ruta segura a la carpeta actual
    $contenido = file($fichero);

    //colocamos el contenido en un array y lo almacenamos en cuatro variables por equipos
    $array = explode("||", trim($contenido[0]));
    $real = (int)$array[0];
    $bar  = (int)$array[1];
    $atl  = (int)$array[2];
    $sev  = (int)$array[3];

    // extraemos el voto de los participantes
    $voto = isset($_GET['voto']) ? (int)$_GET['voto'] : -1;

    //actualizamos los votos añadiendo el recibido a los anteriores
    if ($voto == 0) { $real = $real + 1; }
    if ($voto == 1) { $bar  = $bar  + 1; }
    if ($voto == 2) { $atl  = $atl  + 1; }
    if ($voto == 3) { $sev  = $sev  + 1; }

    //creamos la cadena que se va a insertar en el fichero
    $insertvoto = $real."||".$bar."||".$atl."||".$sev;

    //se abre el fichero como escritura y se escriben los votos actualizados
    file_put_contents($fichero, $insertvoto);

    // se calcula el % del voto de cada uno de los equipos
    $denominador = $real + $bar + $atl + $sev;

    // evitamos division entre 0
    if ($denominador == 0) { $denominador = 1; }

    $tantoMadrid    = round(($real / $denominador) * 100);
    $tantoBarcelona = round(($bar  / $denominador) * 100);
    $tantoAtletico  = round(($atl  / $denominador) * 100);
    $tantoSevilla   = round(($sev  / $denominador) * 100);

    // hacemos las barras mas visibles (px)
    $anchoMadrid    = $tantoMadrid * 2;
    $anchoBarcelona = $tantoBarcelona * 2;
    $anchoAtletico  = $tantoAtletico * 2;
    $anchoSevilla   = $tantoSevilla * 2;
?>

<h2>Resultado :</h2>
<table>
    <tr>
        <td>Real Madrid :</td>
        <td>
            <img src="barrita.gif" width="<?php echo $anchoMadrid; ?>" height="20">
            <?php echo $tantoMadrid; ?>%
        </td>
    </tr>
    <tr>
        <td>Barcelona :</td>
        <td>
            <img src="barrita.gif" width="<?php echo $anchoBarcelona; ?>" height="20">
            <?php echo $tantoBarcelona; ?>%
        </td>
    </tr>
    <tr>
        <td>Atlético de Madrid :</td>
        <td>
            <img src="barrita.gif" width="<?php echo $anchoAtletico; ?>" height="20">
            <?php echo $tantoAtletico; ?>%
        </td>
    </tr>
    <tr>
        <td>Sevilla :</td>
        <td>
            <img src="barrita.gif" width="<?php echo $anchoSevilla; ?>" height="20">
            <?php echo $tantoSevilla; ?>%
        </td>
    </tr>
</table>
