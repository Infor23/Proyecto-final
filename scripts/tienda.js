const mostrarProductos = productos => {
	var cosa ="";
	for (var i = 0; i < productos.length; i++) {

		cosa += `<div class="col-md-3">
    				<div class="thumbnail">
    					<img src="http://es.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211805383.png" class="img-responsive">
    					<div class="caption">
    						<h3 class="text-primary">${producto[i].nombre}</h3>
    						<span class="badge">${producto[i].precio}</span>
    						<p class="text-success">${producto[i].detalle}</p>
    						<button class="btn btn-primary">Detalles</button><button class="btn btn-default">Comprar</button>
    					</div>
    				</div>
    			</div>`
	}
	document.getElementById('producto').innerHTML = cosa;
}

$( document ).ready(
	getJSON( "data.json", mostrarProductos(data) )
)

function filtro(){
    //alert("hola");
    for (var i = 0; i < Things.length; i++) {
        
    }
    if (${producto[i].marca} == "Toshiba") {alert("CORRECTO");}else{
        alert("Hubo un problema");
    }
}