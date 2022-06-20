const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const {ruta} = require('./utils/rutas.js');
const objetos = require('./utils/objetos.js');

const bot = new Bot(robot);

// while (1===1) {

	

// 	if (bot.si(bot.situacion.inventarioNoFull)) {
// 		// bot.viajar(ruta.deBancoAMina);
// 		let hayEspacio = bot.si(bot.situacion.inventarioNoFull);
// 		while (hayEspacio) {
// 			bot.minar(objetos.cobre, 11);
// 			hayEspacio = bot.si(bot.situacion.inventarioNoFull);
// 		}
// 		bot.minar(objetos.hierro, 4);
// 	} else {
// 		bot.viajar(ruta.deMinaABanco);
// 		let menuVacio = bot.si(bot.situacion.inventarioNoFull); 
// 		bot.abrirMenuBanco(objetos.banquero);
// 		bot.vaciarInventario();
// 	}
// }

bot.checkearColor();
//let x = bot.buscar(cobre)

//nsole.log(x);

