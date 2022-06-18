class Bot {
	constructor(robot) {
		this.robot = robot;
	}

	caminar(x, y) {
		this.robot.moveMouseSmooth(x, y);
		this.robot.mouseClick();
	}
}

module.exports = {
	Bot : Bot
}