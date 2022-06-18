class Bot {
	constructor(robot) {
		this.robot = robot;
		this.size = this.robot.getScreenSize();
		this.width = this.size.width;
		this.heigth = this.size.height;
	}

	caminar(coords) {
		const x = coords.x;
		const y = coords.y;
		this.robot.moveMouseSmooth(x, y);
		this.robot.mouseClick();
		this.dormir(12);
	}	

	viajar(listaDeCoord) {
		this.rectificar();
		for (let coord of listaDeCoord) {
			this.caminar(coord);
		}
	}

	revisarMouse() {
		const posMouse = this.robot.getMousePos();
		console.log(posMouse);
	}

	rectificar() {
		const coord = {x: 1764, y: 107};
		this.robot.moveMouseSmooth(coord.x, coord.y);
		this.robot.mouseClick();
	}

	checkearSi(situacion) {
		const color = situacion.color;
		const coord = situacion.coord;
		const img = this.robot.screen.capture(0, 0, this.width, this.height);
		return (img.colorAt(coord.x, coord.y) === color);
	}

	checkearMenu() {
		const menuAbierto = {color : '', coord : {x : 0, y : 0}} //IMPLEMENTAR
		const estaAbierto = this.checkearSi(menuAbierto);
		if (!estaAbierto); //Implementar metodo presionar tecla
	}

	dormir(s) {
		let ms = s * 1000;
		Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
	}
}

module.exports = {
	Bot : Bot
}