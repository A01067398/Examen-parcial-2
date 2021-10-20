<?php 

	require_once '../ConfigDB/conexion.php';	
	header('Content-Type: application/json; charset=UTF-8');

	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		
		$query = "call obtenerTodo(); ";
		$resultado = mysqli_query($conexion,$query);

		if($resultado){

			http_response_code(201);

			$json = array();
			while($fila = mysqli_fetch_array($resultado)){

			$json[] = array(				
				'id'=>$fila['id'],
				'nombre'=>$fila['nombre'],
				'estado'=>$fila['estado'],
				'fecha'=>$fila['fecha']
				);
			}

			//conversion del array json a JSON String
			$jsonCadena = json_encode($json); 
			echo ($jsonCadena);

		}else{

			http_response_code(400);
			$response['state']=false;
        	$response['message']="Error al procesar la consulta";
        	echo json_encode($response);

		}


	}else{

		http_response_code(405);
		$response['state']=false;
        $response['message']="Metodo HTTP no permitido";
        echo json_encode($response);

	}	
    	
    mysqli_close($conexion);

?>
