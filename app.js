console.log("hello world")

const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODEyNjM3NjI5MjMyODQwNzQ0.YDDpxA.8UH6XxjNxJXruSTvt6EUZi2C2Jk');
client.on('ready!', readyDiscord);

function readyDiscord() {
    console.log('im on!');
}

const commandHandler = require('./commands')
client.on('message', commandHandler);

function embed() {
if(msg.content === 'embed') {
   msg.reply('ok')
}
}


