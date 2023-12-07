<?php
// Conexión a la base de datos (ajusta los valores según tu configuración)
$servername = "localhost";
$username = "id21631713_fabricio";
$password = "Fabricio7305.";
$dbname = "id21631713_vinculacion";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Manejar el formulario de registro
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombres = $_POST["full-name"];
    $apellidos = $_POST["full-apellido"];
    $usuario = $_POST["username"];
    $contrasena = $_POST["password"];  // Almacenar sin cifrar
    $correo = $_POST["email"];
    $rol = $_POST["role"];

    // Insertar datos en la tabla
    $sql = "INSERT INTO usuarios (nombres, apellidos, usuario, contrasena, correo, rol) 
            VALUES ('$nombres', '$apellidos', '$usuario', '$contrasena', '$correo', '$rol')";

    if ($conn->query($sql) === TRUE) {
        echo "Usuario creado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
