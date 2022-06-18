const robot = require('robotjs');
const bot = require('./utils/bot.js')
const Bot = bot.Bot;

let miBot = new Bot(robot);

const c1 = {x: 1900, y: 143};
const c2 = {x: 1909, y: 163};
const c3 = {x: 1847, y: 98};
const c4 = {x: 1817, y: 104};
const c5 = {x: 1807, y: 109};
const c6 = {x: 1828, y: 97};
const c7 = {x: 1855, y: 104};
const c8 = {x: 1887, y: 121};
const c9 = {x: 1890, y: 145};


miBot.revisarMouse();

miBot.rectificar();
miBot.caminar(c1);
miBot.caminar(c2);
miBot.caminar(c3);
miBot.caminar(c4);
miBot.caminar(c5);
miBot.caminar(c6);
miBot.caminar(c7);
miBot.caminar(c8);
miBot.caminar(c9);