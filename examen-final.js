const {Candado, Enemigo, elementos} = require('./extras.js');
/*
	Nos encontramos atrapados en el calabozo de nuestro nemesis el lich Oscarito. Hemos logrado salir de nuestra celda y nos topamos con una puerta con candado.
*/

const primerCandado = new Candado();

/*
	1. Nuestro candado esta cerrado. La clave no la sabemos. Es una clave de cuatro numeros.
	Vamos a crear una funcion (hechizarCandado) que intente combinaciones del 0 al 9999, toma un candado como argumento.
	Para probar las claves podemos usar el metodo .intentarAbrir, para checkear si esta abierto podemos usar la propiedad .estado.
	Al final encontremos la clave del candado.
*/

function hechizarCandado(unCandado) {
	for (let i=0; i < 10000; i++) {
		unCandado.intentarAbrir(i);
		if (unCandado.estado === "Abierto") {
			break;
		}
	}
}

hechizarCandado(primerCandado);

/*
	Al cruzar de la primera puerta encontramos con un esqueleto animado, aun no se da cuenta que estas ahi.
	El esqueleto animado solo es vulnerable a los hechizos de fuego, de los cuales no sabes niuno.
*/
const guardiaCalavera = new Enemigo('Guardia Calavera', elementos[1]);
/*
	Para matar al esqueleto debes crear una nueva clase de hechizo.
	2. Crear una clase llamada Hechizo, esta clase recibe en el constructor:
	 		a) un elemento (cadena de texto), y lo guarda como atributo elemento.
	3. Tiene un metodo, lanzar. El metodo recibe un argumento: objetivo.
	      b) dentro del metodo lanzar, usamos objetivo.recibir(this.elemento);
	Por ultumo creamos una instancia de Hechizo, con elemento fuego. Luego lo lanzamos sobre el guardia calavera.
*/


class Hechizo {

	// IMPLEMENTAR CODIGO AQUI

}


// INSTANCIAR Y LANZAR EL HECHIZO AQUI




/*
	Avanzamos por el calabozo, y nos topamos en el duelo final con el jefe. Preparemonos para la batalla.
*/
const oscaritoElDuro = new Enemigo('Oscarito el Lich Duro', elementos[6], 'Vasija');
/*
	a) Sabemos que oscarito el duro es inmune a toda la magia menos el caos, asi que debemos instanciar un Hechizo con elemento tipo caos.
	b) Sabemos que oscaritoElDuro no morira asi de facil porque es un lich, asi que a nuestro hechizo debemos agregarle algo a la hora de lanzar.
*/


// INSTANCIAR EL HECHIZO DEL CAOS AQUI Y LANZARLO AVER QUE PASA


/*
Parece que oscarito el duro tiene algun tipo de inmunidad, para destruirlo debemos primero quitarle su invulnerabilidad. Para esto debemos aprender a sobrecargar nuestros hechizos.
Podemos sobrecargar nuestros hechizos con funciones anonimas..

Tenemos nuestro nuevo hechizo penetrarBarreraMagica, esta funcion toma un objetivo como argumento, y como segunda parte toma una funcion (Funcion anonima).

Dentro de esta funcion debemos desabilitar la barrera magica del objetivo usando objetivo.penetrar();

A continuacion llamamos la funcion anonima, sobre el objetivo.
*/
function penetrarBarreraMagica(objetivo, funcionAnonima) {
	objetivo.penetrar(objetivo);
	funcionAnonima(objetivo);
}

/*

Usemos nuestro hechizo sobrecargado penetrarBarreraMagica sobre oscaritoElDuro, y usando una funcion anonima lanzemos el hechizo que preparamos.

*/




//Si oscarito esta muerto, has ganado.