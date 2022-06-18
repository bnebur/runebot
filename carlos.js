const robot = require('robotjs');
const bot = require('./utils/bot.js')
const Bot = bot.Bot;

let miBot = new Bot(robot);

miBot.revisarMouse();