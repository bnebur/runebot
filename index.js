const robot = require('robotjs');

function main() {
	robot.moveMouseSmooth(0, 0);
	robot.mouseClick();
}

main();