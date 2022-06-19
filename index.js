const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const ruta = require('./utils/rutas.js');

const bot = new Bot(robot);

// bot.viajar(ruta.deBancoAMina);
bot.viajar(ruta.deMinaABanco);

bot.checkearColor();

// if (bot.si(bot.situacion.inventarioNoFull)) {
// 	bot.checkearColor();
// }

