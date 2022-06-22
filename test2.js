const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const {ruta} = require('./utils/rutas.js');
const objetos = require('./utils/objetos.js');

const bot = new Bot(robot);

bot.rectificar();
bot.viajar(ruta.deBancoaMinaAlKharid);











