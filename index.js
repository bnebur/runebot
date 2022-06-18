const robot = require('robotjs');
console.log("Iniciando");
function main() {
	robot.moveMouseSmooth(0, 0);
	robot.mouseClick();
}

main();