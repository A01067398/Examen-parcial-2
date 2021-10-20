$(document).ready(function(){

	Swal.fire('Aviso', 'Cargando informacion', 'info');

	console.clear();
	let respuestaServ;	

	$.ajax({

		url:'PHP/consultaZombie.php',
		type:'POST',
		success: function(response){

			respuestaServ = JSON.parse(response);

			let template = `<h3 class="text-primary pb-5" align="center">Informacion de evaluados</h3>`;
			template += `<table id="tablaDatos" class="display">`;
			template += `<thead>`;
			template += `<tr>`;				
			template += `<th>Identificacion</th>`;
			template += `<th>Nombres y apellidos</th>`;
			template += `<th>EstadoC</th>`;
			template += `<th>Fecha</th>`;
			template += `</tr>`;
			template += `</thead>`;
			template += `<tbody>`;

			respuestaServ.forEach(resp=>{


				template += `<tr>`;										
				template += `<td>${resp.id}</td>`;
				template += `<td>${resp.nombre}</td>`;
				template += `<td>${resp.estado}</td>`;
				template += `<td>${resp.fecha}</td>`;
				template += `<td>`;	
				template += `</tr>`;

					});

			template += `</tbody>`;
			template += `</table>`;

			$('#contenedorTablasAll').html(template);
			$('#tablaDatos').DataTable();

		}
				

	});	

});