const robot = require('robotjs');


console.log("Hola mundo");


console.log("Iniciando");

function main() {
	robot.moveMouseSmooth(0, 0);
	robot.mouseClick();
}

console.log("Adios");

main();