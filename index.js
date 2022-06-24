const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const {ruta} = require('./utils/rutas.js');
const objetos = require('./utils/objetos.js');

const bot = new Bot(robot);

bot.checkearColor();
// bot.rutinaDeMinado(objetos.oro, ruta.deBancoAMina, ruta.deMinaABanco, objetos.banquero);

// bot.viajar(ruta.deBancoaMinaAlKharid);
// bot.minar(objetos.oro);

// bot.menuDesactivar(bot.acciones.correr);