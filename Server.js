var fs = require('fs');
var path;
getGameServerPath();

var port = 9933;
var ClientManagerService = require('./ClientManagerService');
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var http = require("http");
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
function connectToServer() {                            // Called on a user running !command
    return new Promise( function(resolve, reject) {     // Returns a promise. This basically says, wait a sec and I'll give you what you want
        http.request( {                                 // Make the request
            host: "http://p2.zgirls.games:8081",
            method: "POST",
            path: "/gameservice/loading_record.php?type=2&action=imperialEnter&gameUid=488829022000063&server=59&appVersion=1.0.62",
            headers: {
                "Accept-Encoding": "identity",
                "User-Agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; ONEPLUS A3010 Build/KTU84P)",
                "Content-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive"
            }
    }, function (response) {                // Then, when we recieve a response
            response.on("end", () => {      // And have finished recieving data
                resolve()                   // Resolve the promise. This runs the code inside connectToServer.then(function() { code here }
            };
                        })
            
}
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on("message", function(msg) {               // On any message anywhere
    if (msg.content == "!connect") {            // If the message is !connect
        connectToServer().then(function() {     // Make the request. When teh request finishes: 
            message.reply("Connected! ")            // Reply
        })
    }
})
  
console.log("---------------------------");
console.log("Cant meow like me. ");
console.log("Listening on port " + port);
console.log("---------------------------");



