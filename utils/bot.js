class Bot {
	constructor(robot) {
		this.robot = robot;
		this.status = "";
		this.situacion = require('./situacion.js').situacion;
		this.acciones = require('./acciones.js');
		this.size = this.robot.getScreenSize();
		this.width = this.size.width;
		this.height = this.size.height;
	}

	menu(accion) {
		this.robot.moveMouse(accion.coord.x, accion.coord.y);
		this.robot.mouseClick();
	}

	menuActivar(accion) {
		let inactivo = this.checkear(accion.inactivo);
		if (inactivo) this.menu(accion);
	}

	menuDesactivar(accion) {
		let activo = this.checkear(accion.activo);
		if (activo) this.menu(accion);
	}

// FUNCIONES DE MOVIMIENTO

	caminar(coords, tiempo=10) {
		const x = coords.x;
		const y = coords.y;
		this.dormir(2);
		this.robot.moveMouseSmooth(x, y);
		this.robot.mouseClick();
		this.dormir(tiempo);
	}	

	viajar(listaDeCoord) {
		this.rectificar();
		for (let coord of listaDeCoord) {
			if (this.si(this.situacion.correrActivado)) {
				this.caminar(coord, 5);
			} else {
				this.caminar(coord);
			}
		}
	}

// FUNCIONES DE REVISION Y DESARROLLO

	revisarMouse() {
		const posMouse = this.robot.getMousePos();
		console.log(`Coordenadas de mouse:	{x: ${posMouse.x}, y: ${posMouse.y}}`);
		return posMouse;
	}

	checkearColor() {
		const img = this.robot.screen.capture(0, 0, this.width, this.height);
		const mousePos = this.revisarMouse();
		const color = img.colorAt(mousePos.x, mousePos.y);
		console.log(`Color hexadecimal:	${color}`);
	}

// 
	buscar(objeto, intentosMaximos=10) {
		const img = this.robot.screen.capture(0, 0, this.width, this.height);
		let muestra;
		for (let i = 0; i < intentosMaximos; i++) {
			for (let p = 0; p < 1000; p++) {
				
				let randX = this.random(0, this.width - 1);
				let randY = this.random(0, this.height - 1);

				muestra = img.colorAt(randX, randY);

				if (objeto.color.includes(muestra)) {
					console.log(`Encontrado ${muestra}`);
					return {x : randX, y : randY};
				}
			}
		}
	}

	minar(objeto) {
		const mena = this.buscar(objeto);
		if (mena) {
			this.robot.moveMouseSmooth(mena.x, mena.y);
			this.robot.mouseClick();
			this.dormir(objeto.tiempo);
		} else {
			console.log('No veo menas!');
		}

	}

	abrirMenuBanco(objetoBanquero) {
		let coord = this.buscar(objetoBanquero);
		if (coord) {
			this.robot.moveMouse(coord.x, coord.y);
			this.dormir(1);
			this.robot.mouseClick("right");
			this.dormir(1);
			this.robot.moveMouse(coord.x, coord.y + 40);
			this.robot.mouseClick();
			this.dormir(4);
		} else {
			console.log("No hay banquero!");
		}
	}

	vaciarInventario() {
		let coord = { x : 1880, y : 982 }
		this.robot.moveMouse(coord.x, coord.y);
		this.robot.mouseClick("right");
		this.dormir(1);
		this.robot.moveMouse(coord.x, coord.y + 20);
		this.robot.mouseClick();
	}

// FUNCIONES DE MANEJO DE MENU

	rectificar() {
		const coord = {x: 1764, y: 107};
		this.robot.moveMouseSmooth(coord.x, coord.y);
		this.robot.mouseClick();
	}
// DEPRECAR
	si(situacion) {
		const color = situacion.color;
		const coord = situacion.coord;
		const img = this.robot.screen.capture(0, 0, this.width, this.height);
		return (img.colorAt(coord.x, coord.y) === color);
	}
//
	checkear(situacion) {
		const img = this.robot.screen.capture(0, 0, this.width, this.height);
		return (img.colorAt(situacion.coord.x, situacion.coord.y) === situacion.color);
	}

	confirmar(situacion) {
		const confirmacion = situacion.confirmacion;
		let existe = this.checkear(situacion);
		if (existe) {
			this.robot.moveMouse(situacion.coord.x, situacion.coord.y);
			let img = this.robot.screen.capture(0, 0, this.width, this.height);
			return (img.colorAt(confirmacion.coord.x, confirmacion.coord.y) === confirmacion.color);
		}
	}

// OTRAS FUNCIONES

	dormir(s) {
		let ms = s * 1000;
		Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
	}

	random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
// RUTINAS
	rutinaDeMinado(metal, deBancoAMina, deMinaABanco, banquero) {
		while (true) {
			let inventarioVacio = this.checkear(this.situacion.inventarioVacio);
			if (inventarioVacio) {
				this.menuDesactivar(this.acciones.correr);
				this.viajar(deBancoAMina);
				let hayEspacio = this.checkear(this.situacion.inventarioVacio);
				while (hayEspacio) {
					this.menuActivar(this.acciones.correr);
					this.minar(metal);
					hayEspacio = this.checkear(this.situacion.inventarioVacio);
				}
			} else {
				this.menuDesactivar(this.acciones.correr);
				this.viajar(deMinaABanco);
				let existeBanquero = this.buscar(banquero);
				if (existeBanquero) {
					this.abrirMenuBanco(banquero);
					this.vaciarInventario();
					this.dormir(4);
				}
			}
		}
	}

}

module.exports = {
	Bot : Bot
}