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
}

module.exports = {
	Bot : Bot
}