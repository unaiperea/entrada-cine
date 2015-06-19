/***********************************************
 * Funciones para usar en todo el proyecto
 * 
 ***********************************************/

/*****************************************
 CINE DE ALMENDRALEJO (PAG 283)
 ******************************************/

/**
 * Calcula el precio de la entrada del Cine de Almendralejo
 * 
 * @param dia: Dia de la semana escrito en minusculas, ej: ['lunes','martes',...'domingo']
 * @param edad: edad de la persona que compra la entrada, formato numero entero
 * @return precio en euros, null si
 */
function calcularEntrada(dia, edad) {
	var precio = "Error";
	if ((edad != "") && (edad >= 0) && (!isNaN(edad))) {
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
			alert("El dia no es correcto");
		}// end switch
	} else {
		alert("La edad no es correcta");
	}

	document.getElementById("precio").innerHTML = precio;
	
	//return precio;
}
// end:function entradas (dia,edad)


/**
 * Permite introducir sólo números
 * evento parámetro del tipo event (objeto) 
 * return devuelve el caracter introducido en caso de ser un número entre 0 y 9
 */
 function justNumbers(evento){
	 //Pregunta si el caracter recibido es >= 0 y <=9
	 return evento.charCode >= 48 && evento.charCode <= 57;
 }



