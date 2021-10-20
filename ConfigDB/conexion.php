<?php

	require "PerfilConexion.php";
	$Perfil = new PerfilConexion();	

	try{

		$conexion=mysqli_connect("{$Perfil->getServerName()}","{$Perfil->getUser()}","{$Perfil->getPass()}","{$Perfil->getDataBaseName()}");

	}catch(Exception $e){
		?>
	
		<!DOCTYPE html>
		<html>
		<head>
		<title>Control de ingreso</title>
			<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.3/dist/sweetalert2.all.min.js"></script>	
		</head>
		<body>	
			<script>
				Swal.fire({icon: 'error',title: 'Oops...',text: 'Error al momento de establecer la conexion al servidor. Intente de nuevo'}).then((result)=>{
				window.location.href="../index.php";
				});
			</script>
		</body>
		</html>

	<?php
}

?>
