$(document).ready(function(){

	console.clear();
	let respuestaServ;

	$("#btnRegistro").on('click',(function(e) {

		e.preventDefault();
		
		let nombreZombie = $("#nombre").val();
		let estadoZombie = $("#seleccionEstado").val();

		$.ajax({

			url:'PHP/registroZombie.php',
			type:'POST',
			data:{ nombreZombie, estadoZombie },
			success: function(response){
				respuestaServ = JSON.parse(response);
			}
				

		});	

		Swal.fire('Respuesta', 'Operacion realizada', 'success')

	}));

});
