const robot = require('robotjs');
const bot = require('./utils/bot.js')
const Bot = bot.Bot;

let miBot = new Bot(robot);

const coord1 = {x: 1900, y: 143};
const coord2 = {x: 1909, y: 163};


miBot.caminar(coord2);

//miBot.revisarMouse();