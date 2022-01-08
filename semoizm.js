const express = require("express");
const { Client, MessageEmbed } = require("discord.js-selfbot");
const app = express();
const semotoken = '' //botunuzun tokenini girin


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js-selfbot");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
});
let sent = [];



client.on("guildCreate", (semoizm) => {});

client.on("message", async (msg) => {
  if (msg.content === "!owo") {
    setInterval(() => {
      let a = client.channels.cache.get(""); // owo kasacağınız kanal idsi

      a.send("wh");
      a.send("wb");
    }, 20000);
  }
});


client.login(semotoken);
