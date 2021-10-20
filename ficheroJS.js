$(document).ready(function(){

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
				console.log(JSON.stringify(response));
				Swal.fire(JSON.stringify(response));

			}

		});	

	}));

});
