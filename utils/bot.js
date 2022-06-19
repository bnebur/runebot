class Bot {
	constructor(robot) {
		this.robot = robot;
		this.situacion = require('./situacion.js').situacion;
		this.menu = require('./menu.js');
		this.size = this.robot.getScreenSize();
		this.width = this.size.width;
		this.heigth = this.size.height;
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

// FUNCIONES DE MANEJO DE MENU

	rectificar() {
		const coord = {x: 1764, y: 107};
		this.robot.moveMouseSmooth(coord.x, coord.y);
		this.robot.mouseClick();
	}

	si(situacion) {
		const color = situacion.color;
		const coord = situacion.coord;
		const img = this.robot.screen.capture(0, 0, this.width, this.height);
		return (img.colorAt(coord.x, coord.y) === color);
	}

// OTRAS FUNCIONES

	dormir(s) {
		let ms = s * 1000;
		Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
	}
}

module.exports = {
	Bot : Bot
}