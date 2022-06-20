const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const {ruta} = require('./utils/rutas.js');
const objetos = require('./utils/objetos.js');

const bot = new Bot(robot);


// if (bot.si(bot.situacion.inventarioNoFull)) {
// 	bot.viajar(ruta.deBancoAMina);
// } else {
// 	bot.viajar(ruta.deMinaABanco);
// 	let menuVacio = bot.si(bot.situacion.inventarioNoFull); 
// 	bot.abrirMenuBanco(objetos.banquero);
// 	bot.vaciarInventario();
// }

const hierro = {
	color : ['452319', '2f190f', '3d1f16', '22110c', '321a11']
}


bot.minar(hierro);