var fs = require('fs');
var path;
getGameServerPath();

var port = 9933;
var io = require('socket.io')(port);
var ClientManagerService = require('./ClientManagerService');
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

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

console.log("---------------------------");
console.log("Cant meow like me. ");
console.log("Listening on port " + port);
console.log("---------------------------");





// TESTING PART \\ (An idea by another programmer)



var WebSocket = require('ws');
 
var ws = new WebSocket('ws://p2.zgirls.games:8081/gameservice/loading_record.php?type=2&action=imperialEnter&gameUid=444473466000093&server=59&appVersion=1.0.60');
 
ws.on('open', function (event) {
  ws.send('al.tree.check');
});
 
 
 
 // Another idea given by another programmer, uses php in this case)
 
 
 <?php
$url = 'http://p2.zgirls.games:8081/gameservice/loading_record.php?type=2&action=imperialEnter&gameUid=444473466000093&server=59&appVersion=1.0.62';
$data = array('http' => 'value1', 'data' => 'value2');

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { /* Handle error */ }

var_dump($result);
?>

 
 // The code I want to be a POST request and a command as well in case the conenction dies if possible (for example !connect to execute this \\
 
POST http://p2.zgirls.games:8081/gameservice/loading_record.php?type=2&action=imperialEnter&gameUid=488829022000063&server=59&appVersion=1.0.62
Accept-Encoding: identity
User-Agent: Dalvik/1.6.0 (Linux; U; Android 4.4.4; ONEPLUS A3010 Build/KTU84P)
Host: p2.zgirls.games:8081
Connection: Keep-Alive
Content-Type: application/x-www-form-urlencoded
Content-length: 0

// Please check info.js for requests \\
 