<?php

	if($_SERVER['REQUEST_METHOD'] == 'POST'){

		$nombre = $_POST['nombreZombie'];
		$estado = $_POST['estadoZombie'];

		$query = "call registrarZombie('$nombre','$estado'); ";
		$resultado = mysqli_query($conexion,$query);

		if($resultado){

			http_response_code(200);
			$response['state']=true;
        	$response['message']="Registro realizado";

		}else{

			http_response_code(400);
			$response['state']=false;
        	$response['message']="Error al procesar la consulta";

		}


	}else{

		http_response_code(405);
		$response['state']=false;
        $response['message']="Metodo HTTP no permitido";

	}

	header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($response);	

?>
