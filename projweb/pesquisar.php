<!DOCTYPE html>
 <html>
 <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Info-Drugs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css">
    <script src="main.js"></script>
    <link rel="shortcut icon" href="imgs/a.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
</head>
<header>
    
    <h2>
        <u></u>
    </h2>
    <p>
        <div class="foto">
            <img src="imgs/logo.png" style="width: 12rem; height: 12rem">

        </div>
</header>

<body style="background-color:#A2DBCD;">

<?php
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $dbname = "funildevendas";
    //Criar a conexao
    $conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
    
    $pesquisar = $_POST['pesquisar'];
    $result_cursos = "SELECT * FROM `farmacia` WHERE nome_remedio LIKE '%{$pesquisar}%' OR info_remedio LIKE '%{$pesquisar}%' LIMIT 5";
    $conn->query("SET NAMES 'utf8'");
$conn->query('SET character_set_connection=utf8');
$conn->query('SET character_set_client=utf8');
$conn->query('SET character_set_results=utf8');
// exit($result_cursos);

    $resultado_cursos = mysqli_query($conn, $result_cursos);
    
    while($rows_cursos = mysqli_fetch_assoc($resultado_cursos)){
        echo "Nome do Remédio: ".$rows_cursos['nome_remedio']."<br>";
        echo "Função: ".$rows_cursos['info_remedio']."<br>";
    }
?>
</body>

<!-- Resolver o bd em casa -->
<!-- https://www.youtube.com/watch?v=cvLaqZQnIEo -->