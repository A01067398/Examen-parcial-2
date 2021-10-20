$(document).ready(function(){

	$("#btnRegistro").on('click',(function(e) {

		e.preventDefault();
		
		let nombreZombie = $("#nombre").val();
		let estadoZombie = $("#seleccionEstado").val();

		$.ajax({

			url:'informacion.php',
			type:'POST',
			data:{ opc },
			success: function(response){

				respuestaServ = JSON.parse(response);

			}

		});	

	}));

});