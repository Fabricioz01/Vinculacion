<?php
if (isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $filename = $file['name'];
    $uploadDir = 'uploads/';

    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $destination = $uploadDir . $filename;

    if (move_uploaded_file($file['tmp_name'], $destination)) {
        // Guardar información sobre el archivo en la base de datos si es necesario
        // Realizar una inserción en la base de datos con el nombre del archivo y otros detalles
    }
}

header('Location: index.html'); // Redirigir de vuelta a la página principal
?>
