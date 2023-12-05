<form action="" method="get">
  <input type="search" name="palabra" placeholder="Buscar una palabra">
  <input type="submit" value="Buscar">
</form>

<?php
$conn = mysqli_connect("localhost", "root", "", "thefacebook3");

// Verificar si se ha enviado el formulario
if (isset($_GET['palabra'])) {
    // Obtener la palabra o frase a buscar
    $palabra = strtolower($_GET['palabra']);

    // Realizar la búsqueda en la base de datos
    $resultados = mysqli_query($conn, "SELECT * FROM users");

    // Obtener los resultados de la base de datos
    $resultados = mysqli_fetch_all($resultados, MYSQLI_ASSOC);

    $palabras_similares = array(); // Array para almacenar palabras similares

    // Procesar los resultados de la búsqueda
    foreach ($resultados as $resultado) {
        $id = $resultado['id'];
        $name = strtolower($resultado['name']);
        $email = $resultado['email'];
        $status = $resultado['status'];

        similar_text($palabra, $name, $similarity); // Calcular la similitud

        // Si la similitud es mayor a un cierto umbral (puedes ajustar el valor)
        if ($similarity > 80) {
            $palabras_similares[] = [
                'id' => $id,
                'name' => $resultado['name'],
                'email' => $email,
                'status' => $status
            ]; // Almacenar datos similares
        }
    }

    if (!empty($palabras_similares)) {
        // Mostrar los datos de las palabras similares encontradas
        echo "Resultados encontrados: <br>";
        foreach ($palabras_similares as $similar) {
            echo "ID: " . $similar['id'] . "<br>";
            echo "Nombre: " . $similar['name'] . "<br>";
            echo "Correo: " . $similar['email'] . "<br>";
            echo "Estado: " . $similar['status'] . "<br><br>";
        }
    } else {
        echo "No se encontraron resultados similares.";
    }
}
?>
