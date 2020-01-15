<?php
session_start();
include_once("conexao.php");
?>
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Info-Drugs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="cadastrar.css">
    <script src="main.js"></script>
    <link rel="shortcut icon" href="imgs/a.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<title>Cadastrar</title>


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
	<?php
		if(isset($_SESSION['msg'])){
			echo $_SESSION['msg'];
			unset($_SESSION['msg']);
		}
		?>
		<form method="POST" action="processa_cad.php">
		<i class="material-icons" style="font-size:48px;color:red">add_location</i>
		<a href="mapa.php" class="fonte"> Voltar para o mapa </a><br><br>
		
			<label class="fonte">Nome: </label>
			<input type="text" name="name" placeholder="  Nome da Empresa ou Filial"><br><br>
			
			<label class="fonte">Endereço: </label>
			<input type="text" name="address" placeholder="  Digite o número e o Logradouro"><br><br>
			
			<label class="fonte">Latitude: </label>
			<input type="text" name="lat" placeholder="  Digite a latitude"><br><br>
			
			<label class="fonte">Longitude: </label>
			<input type="text" name="lng" placeholder="  Digite a mensagem"><br><br>		
			
			<label class="fonte">Tipo da Empresa: </label>
			<input type="text" name="type" placeholder="  Drogaria, Farmácia..."><br><br>	
		
			<input type="submit" value="Cadastrar"><br><br>
		</form>
</body>
</html>