const robot = require('robotjs');
const {Bot} = require('./utils/bot.js');
const {ruta} = require('./utils/rutas.js');
const objetos = require('./utils/objetos.js');

const bot = new Bot(robot);

bot.rutinaDeMinado(objetos.hierro, ruta.deBancoAMina, ruta.deMinaABanco, objetos.banquero);

console.log("Pls");