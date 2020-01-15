<!DOCTYPE html>
 <html>
 <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Info-Drugs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="form.css">
    <script src="main.js"></script>
    <link rel="shortcut icon" href="imgs/a.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
</head>

<body style="background-color:  #A2DBCD;">
    
<header>            
    <img src="imgs/logo.png" style="width: 12rem; height: 12rem">
 </header>
<hr>
<nav  class="text-center">
    <h4 class="d-inline"><a class="p-4 text-dark" href="index.php">Início</a></h4>
    <h4 class="d-inline"><a class="p-4 text-dark" href="form.php">Pesquisar bula do medicamento</a></h4>
    <h4 class="d-inline"><a class="p-4 text-dark" href="mapa.php">Farmácias Proximas</a></h4>
</nav>

<hr>
<main class="mt-4">
<h1>Pesquisar Remédios</h1>
<form method="POST" action="pesquisar.php">
    <input tupe="text" name="pesquisar" placeholder="Pesquisar" >
    <input type="submit" value="ENVIAR">
</form>
</main>

<footer class="text-light text-center p-3" style="background: rgba(7, 12, 7, 0.808); position: fixed; bottom: 0; width: 100%">
    &copy; 
    Copyright 2019 Info-Drugs.
</footer>

</body>
</html>
