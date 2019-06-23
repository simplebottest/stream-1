const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const ms = require("ms");
const fs = require('fs');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const r1 = require('snekfetch');
const jimp = require('jimp')
const math = require('math-expression-evaluator'); 
const child_process = require("child_process");
const developers = ['518113780723351592'];
const admin = "#";
const prefix = "#";


//=============================== - [ Bot ] - ===================================


client.on('ready', () => {
  console.log(`Logged in as : ${client.user.tag}!`);
  console.log(`Servers : [ " ${client.guilds.size} " ]`);
  console.log(`Users : [ " ${client.users.size} " ]`);
  console.log(`Channels : [ " ${client.channels.size} " ]`);
  client.user.setActivity("offline",{type: 'WATCHING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith('play')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith( 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
  } else 
  if (message.content.startsWith('lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
  } else 
if (message.content.startsWith('st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/youssef98123")
    message.channel.sendMessage(`**:white_check_mark: | ${argresult}**`).then(message => {message.delete(6000)})
}
});

client.login(process.env.BOT_TOKEN);
