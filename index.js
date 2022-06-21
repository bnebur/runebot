const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const {ruta} = require('./utils/rutas.js');
const objetos = require('./utils/objetos.js');

const bot = new Bot(robot);

while (true) {

	let inventarioVacio = bot.si(bot.situacion.inventarioNoFull);
	
	if (inventarioVacio) {
		bot.viajar(ruta.deBancoAMina);
		let hayEspacio = bot.si(bot.situacion.inventarioNoFull);
		while (hayEspacio) {
			bot.minar(objetos.hierro, 5);
			hayEspacio = bot.si(bot.situacion.inventarioNoFull);
		}
		bot.minar(objetos.hierro, 4);
	} else {
		bot.viajar(ruta.deMinaABanco);
		let banquero = bot.buscar(objetos.banquero);
		if (banquero) {
			bot.abrirMenuBanco(objetos.banquero);
			bot.vaciarInventario();
			bot.dormir(4);
		}
	}

}