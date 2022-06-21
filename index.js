const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const {ruta} = require('./utils/rutas.js');
const objetos = require('./utils/objetos.js');

const bot = new Bot(robot);

// while (1 === 1) {

// 	let inventarioVacio = bot.si(bot.situacion.inventarioNoFull);
	
// 	if (inventarioVacio) {
// 		bot.viajar(ruta.deBancoAMina);
// 		let hayEspacio = bot.si(bot.situacion.inventarioNoFull);
// 		while (hayEspacio) {
// 			bot.minar(objetos.hierro, 5);
// 			hayEspacio = bot.si(bot.situacion.inventarioNoFull);
// 		}
// 		bot.minar(objetos.hierro, 4);
// 	} else {
// 		bot.viajar(ruta.deMinaABanco);
// 		let banquero = bot.buscar(objetos.banquero);
// 		if (banquero) {
// 			bot.abrirMenuBanco(objetos.banquero);
// 			bot.vaciarInventario();
// 			bot.dormir(4);
// 		}
// 	}

// }

const x = ['211a2e', '181321', '0e0918', '0f0a19', '160e21', '191125', '1b1625', '251d32', '221b2f', '211a2e', '181321', '0e0918', '211a2b', '302641', '1e1729']
y = new Set(x);
console.log(y);























const banquero = {
	color: ['211a2e', '181321', '0e0918', '211a2b', '302641', '1e1729']
}