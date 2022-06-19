const robot = require('robotjs');
const bot = require('./utils/bot.js');
const rutas = require('./utils/rutas.js');
const Bot = bot.Bot;

let miBot = new Bot(robot);
//miBot.rectificar();
 






//miBot.viajar(rutas.deVarrockABarbados);
//miBot.viajar(rutas.deBarbadosAVarrock);
//miBot.viajar(rutas.deBancoAMina);
//miBot.viajar(rutas.deMinaABanco);


miBot.revisarMouse();
//miBot.viajar(rutas.deLumbridgeAVarrock);
