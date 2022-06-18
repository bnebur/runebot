class Bot {
	constructor(robot) {
		this.robot = robot;
	}

	caminar(coords) {
		let x = coords.x;
		let y = coords.y;
		this.robot.moveMouseSmooth(x, y);
		this.robot.mouseClick();
		this.dormir(14);
	}

	revisarMouse() {
		let posMouse = this.robot.getMousePos();
		console.log(posMouse);
	}

	rectificar() {
		const coord = {x: 1764, y: 107};
		this.robot.moveMouseSmooth(coord.x, coord.y);
		this.robot.mouseClick();
	}

	viajar(listaDeCoord) {
		this.rectificar();
		for (let coord of listaDeCoord) {
			this.caminar(coord);
		}
	}

	dormir(s) {
		let ms = s * 1000;
		Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
	}
}

module.exports = {
	Bot : Bot
}