const robot = require('robotjs');
const bot = require('./utils/bot.js');
const rutas = require('./utils/rutas.js');
const Bot = bot.Bot;

let miBot = new Bot(robot);

miBot.viajar(rutas.deLumbridgeAVarrock);
