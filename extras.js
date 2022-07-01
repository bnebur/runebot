class Candado {
	constructor() {
		this.combinacion = this.generadorDeClave();
		this.estado = "Cerrado";
	}

	intentarAbrir(clave) {
		if (clave == this.combinacion) {
			this.estado = "Abierto";
			console.log(`Clave ${clave} correcta!!!!!!!!`);
			console.log(`Candado ${this.estado}`);
		} else {
			console.log(`Clave ${clave} incorrecta.`);
			console.log(`Candado ${this.estado}`);
		}
	}

	generadorDeClave() {
	return (Math.floor(Math.random() * 9999));
	}

}

class Enemigo {
	constructor(nombre, vulnerabilidad, reliquia=null) {
		this.nombre = nombre;
		this.vulnerabilidad = vulnerabilidad;
		this.estado = "vivo";
		this.reliquia = reliquia;
	}

	recibir(elemento) {
		if (this.reliquia) {
			console.log(`${this.nombre} se rie de ti.`);
			console.log(`Tu hechizo parece destruirlo, pero ${this.nombre} se vuelve a rearmar por arte de magia.`)	
		} else {
			if (elemento === this.vulnerabilidad) {
				this.estado = "muerto"
				console.log(`El ${this.nombre} es vulnerable al ${elemento}.`);
				console.log(`El ${this.nombre} esta ${this.estado}.`);
			} else {
				console.log(`El ${this.nombre} no es vulnerable al ${elemento}.`);
				console.log(`El ${this.nombre} sigue ${this.estado}.`);
				console.log(`El ${this.nombre} te machetea.`)
			}
		}
	}

	penetrar() {
		console.log(`Con mucha habilidad, lanzas un chizpazo de tus dedos y destrulles la ${this.reliquia} a lado de ${this.nombre}`);
		console.log(`${this.nombre} parece perder mucho poder.`);
		this.reliquia = null;
	}
}

const elementos = ['aire', 'fuego', 'hielo', 'oscuro', 'luz', 'sangre', 'caos'];


module.exports = {
	Candado : Candado,
	Enemigo : Enemigo,
	elementos : elementos
}