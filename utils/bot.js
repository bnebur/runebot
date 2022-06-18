class Bot {
	constructor(robot) {
		this.robot = robot;
	}

	caminar(x, y) {
		this.robot.moveMouseSmooth(x, y);
		this.robot.mouseClick();
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
}

module.exports = {
	Bot : Bot
}