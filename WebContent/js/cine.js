/***********************************************
 * Funciones para usar en todo el proyecto
 * 
 ***********************************************/

/*****************************************
 CINE DE ALMENDRALEJO (PAG 283)
 ******************************************/

		function validar(){
			resul = false;
			if (validarEdad()){
				document.getElementById("precio").innerHTML = entradas(dia, edad);
				}
			return resul;
		}
		
		function validarDiaEnter(evento){
			if (event.keyCode==13){
				//Comprobar
				return validar();
			}
		}
		
		function validarEdad(){
			var resul = false;
			var sEdad = null;
			var error = '';
			sEdad = document.getElementById("caja_edad").value;
			
			if ((sEdad != null) && (sEdad != undefined) && !isNaN(sEdad)){
				if ((sEdad >= 0) && (sEdad<100)){
					resul = true;
				}else{
					error = "Introduce la edad entre 0 y 99 años\n";
				}
			} else{
				error = "Introduce la edad entre 0 y 99 años\n";
			}
			
			if (errores != ''){
				alert(errores);
			}
			
			return resul;
		}
		

		// end:function entradas (dia,edad)







/**
 * Calcula el precio de la entrada del Cine de Almendralejo
 * 
 * @param dia:
 *            Dia de la semana escrito en minusculas, ej:
 *            ['lunes','martes',...'domingo']
 * @param edad:
 *            edad de la persona que compra la entrada, formato numero entero
 * @return precio en euros, null si
 */
function entradas(dia, edad) {
	var precio = null;
	if ((edad >= 0) && (!isNaN(edad))) {
		switch (dia) {
		case 'lunes':
			if (edad <= 35) {
				precio = 2;
			} else {
				precio = 5;
			}
			break;
		case 'martes':
			if (edad <= 25) {
				precio = 2;
			} else if (edad > 25 && edad <= 50) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'miercoles':
			if (edad <= 18) {
				precio = 3;
			} else if (edad > 18 && edad <= 50) {
				precio = 5;
			} else {
				precio = 8;
			}
			break;
		case 'jueves':
			if (edad <= 18) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'viernes':
		case 'sabado':
		case 'domingo':
			precio = 10;
			break;
		default:
			precio = "El dia o la edad no son correctos";
		}// end switch
	} else {
		precio = "El dia o la edad no son correctos";
	}
	return precio;
}
// end:function entradas (dia,edad)