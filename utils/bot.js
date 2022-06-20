class Bot {
	constructor(robot) {
		this.robot = robot;
		this.status = "";
		this.situacion = require('./situacion.js').situacion;
		this.menu = require('./menu.js');
		this.size = this.robot.getScreenSize();
		this.width = this.size.width;
		this.height = this.size.height;
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

	buscar(objeto, intentosMaximos=8) {
		const img = this.robot.screen.capture(0, 0, this.width, this.height);
		let muestra;
		for (let i = 0; i < intentosMaximos; i++) {
			for (let p = 0; p < 1000; p++) {
				
				let randX = this.random(0, this.width - 1);
				let randY = this.random(0, this.height - 1);

				muestra = img.colorAt(randX, randY);

				if (objeto.color.includes(muestra)) {
					return {x : randX, y : randY};
				}
			}
		}
	}

	minar(objeto, tiempoDeDormir) {
		const mena = this.buscar(objeto);
		if (mena) {
			this.robot.moveMouseSmooth(mena.x, mena.y);
			this.robot.mouseClick();
			this.dormir(tiempoDeDormir);
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

	random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

module.exports = {
	Bot : Bot
}