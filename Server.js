var fs = require('fs');

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
            path: "/gameservice/loading_record.php?type=2&action=imperialEnter&gameUid=488829022000063&server=59&appVersion=1.0.63",
            headers: {
                "Accept-Encoding": "identity",
                "User-Agent": "Dalvik/1.6.0 (Linux; U; Android 4.4.4; ONEPLUS A3010 Build/KTU84P)",
                "Content-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive"
            }
    }, 
		function (response) {                // Then, when we recieve a response
			response.on("end", () => {      // And have finished recieving data
				resolve()                   // Resolve the promise. This runs the code inside connectToServer.then(function() { code here }
            })
    });
	    
	    
// Test 1 - Trying to obtain data from the server  (kingdom.officers)
	    
                     
var http = new XMLHttpRequest();
var url = "http://p2.zgirls.games:8081/gameservice/loading_record.php?type=2&action=kingdom.officers&gameUid=444473466000093&server=59&appVersion=1.0.63";
var params = JSON.stringify(myJSONobj);
http.open("POST", url, true);

http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
function httpGetAsync(Url, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", Url, true); // true for asynchronous 
    xmlHttp.send(null);
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
    logger.info(bot.username + ' - (' + bot.id + ')')
});

        
bot.on("message", function(msg) {               // On any message anywhere
    if (msg.content == "*connect") {            // If the message is !connect
        connectToServer().then(function() {     // Make the request. When the request finishes: 
            message.reply("Connected! ")            // Reply
});
	    

	    
// Follow-up to the testing part	    
	    
	    
        		
bot.on("message", function(msg) {               
    if (msg.content == "*king") {            
        httpGetAsync().then(function() {     
            message.reply("Test! ")            // Reply
});
	    
	    
//
	    
	    p..
.. Z..]a. E .;..@ '.:./X:....d...^m..N}'=.P. ..n  HTTP/1.1 200 OK
Server: nginx
Date: Fri, 22 Sep 2017 22:12:32 GMT
Content-Type: text/html
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Encoding
X-Powered-By: PHP/5.5.30
Content-Encoding: gzip

2b
...      ..H...W../.IQT....T...,Q. g....   
0

//
	    
	    
	     Z..]ap..
... E ..M.@ ..x%...d/X:..^..}';4m..NP....S  GET / HTTP/1.1
Host: p2.zgirls.games:8081
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.8
Cookie: gsScrollPos-1093=0; gsScrollPos-1495=; gsScrollPos-780=

//

Node 1: IP = 192.168.8.100, TCP port = 52425
Node 2: IP = 47.88.58.149, TCP port = 8081

GET / HTTP/1.1
Host: p2.zgirls.games:8081
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.8
Cookie: gsScrollPos-1093=0; gsScrollPos-1495=; gsScrollPos-780=


HTTP/1.1 200 OK
Server: nginx
Date: Fri, 22 Sep 2017 22:37:46 GMT
Content-Type: text/html
Transfer-Encoding: chunked
Connection: keep-alive
Vary: Accept-Encoding
X-Powered-By: PHP/5.5.30
Content-Encoding: gzip

2b
‹      óHÍÉÉWĎ/ĘIQTđČĎ©TÎČ,Q g‰â‹   
0


