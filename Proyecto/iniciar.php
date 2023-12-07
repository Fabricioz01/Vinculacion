<?php
session_start();

// Conexión a la base de datos (ajusta los valores según tu configuración)
$servername = "localhost";
$username = "id21631713_fabricio";
$password = "Fabricio7305.";
$dbname = "id21631713_vinculacion";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["username"];
    $contrasena = $_POST["password"];

    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (($usuario == 'administrador' && $contrasena == 'fabri123') || $contrasena == $row["contrasena"]) {
            $_SESSION["usuario"] = $row["usuario"];
            if ($row["rol"] == 'administrador') {
                header("Location: paginaprincipal.html");
            } elseif ($row["rol"] == 'lector') {
                header("Location: basico.html");
            } else {
                echo "Rol desconocido";
            }
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "Usuario no encontrado";
    }
}

$conn->close();
?>
