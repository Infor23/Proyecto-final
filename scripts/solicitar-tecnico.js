

function validar(){
$("#nom").hide();
$("#em").hide();
$("#dir").hide();
$("#mnsj").hide();
	
	var Nombre = document.getElementById("usr").value;
	var Email = document.getElementById("email").value;
	var Direccion = document.getElementById("direccion").value;
	var Mensaje = document.getElementById("mensaje").value;
	//alert("Hola");
	if (Nombre == "") {document.getElementById("alertNombre").innerHTML = "<div class='container' id='nom'><div class='alert alert-danger'>"+
																			"<strong>Atención!</strong> Debe ingresar su nombre para"+
																			" continuar.</div></div>"
	}
	if (!/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/.test(Email)) {document.getElementById("alertEmail").innerHTML = "<div class='container' id='em'><div class='alert alert-danger'>"+
																			"<strong>Atención!</strong> Debe ingresar su cuenta de correo electrónico para"+
																			" continuar.</div></div>"
	

	}
	if (Direccion == "") {document.getElementById("alertDireccion").innerHTML = "<div class='container' id='dir'><div class='alert alert-danger'>"+
																			"<strong>Atención!</strong> Debe ingresar su dirección para"+
																			" continuar.</div></div>"
	}
	if (Mensaje == "") {document.getElementById("alertMensaje").innerHTML = "<div class='container' id='mnsj'><div class='alert alert-danger'>"+
																			"<strong>Atención!</strong> Debe ingresar su mensaje para"+
																			" continuar.</div></div>"
	}
}