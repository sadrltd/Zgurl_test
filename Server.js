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


//
	
	
	Node 1: IP = 192.168.8.100, TCP port = 52359
Node 2: IP = 195.27.31.253, TCP port = 80

GET /android/app44.conf HTTP/1.1
Host: www.xyaz.cn
User-Agent: Wget
Connection: close


HTTP/1.1 200 OK
Server: Tengine
Content-Length: 1272
Connection: close
Date: Fri, 22 Sep 2017 21:42:14 GMT
ETag: "4f8-5599c937fe941"
Last-Modified: Wed, 20 Sep 2017 10:38:27 GMT
Accept-Ranges: bytes
Via: cache14.l2hk1[0,304-0,H], cache19.l2hk1[0,0], cache5.de1[0,200-0,H], cache6.de1[0,0]
Age: 3262
X-Cache: HIT TCP_MEM_HIT dirn:5:155697652 mlen:-1
X-Swift-SaveTime: Fri, 22 Sep 2017 22:09:30 GMT
X-Swift-CacheTime: 3600
Timing-Allow-Origin: *
EagleId: c31b1fce15061197967201412e

<C1>42b7524f;38c80ff8;d2bf6e77;9d26c644;85c4d1da;149003a2;c77eaa7a</C1>
<C2>cf773dc3;9962517b;baddf9a2;89fb206a;9cc2c6ea;f3436e56;a6e786cd;d13bc80c;c0de08f4;56e9428f;ad0112a7;19d03571;a4a16467;a8a5c0ed;d1bead2b;155b406c;9259b79e;6d56ab8c;70c9b339;662c1d1b;3627051f;ce9e2602;c774a107;2030fd70;7121c74c;a6199ed2;96baf9cc;b864ea0b;6da69e4e;2166e860;3dfdd82d;820842ee;d0fc4a48</C2>
<C3>1db2bb55;06338ae5;ca3f2a72;2042f201</C3>
<AC1>9d26c644;149003a2;c77eaa7a</AC1>
<AC2>cf773dc3;9962517b;baddf9a2;89fb206a;7805a33c;9cc2c6ea;f3436e56;a6e786cd;d13bc80c;c0de08f4;56e9428f;ad0112a7;19d03571;a4a16467;a8a5c0ed;d1bead2b;155b406c;9259b79e;6d56ab8c;70c9b339;662c1d1b;3627051f;ce9e2602;c774a107;b864ea0b;32d872c0;2030fd70;061ac777;a6199ed2;6d17f5bd;23a125b6;96baf9cc;6da69e4e;2166e860;3dfdd82d;820842ee;d0fc4a48</AC2>
<AC3>1db2bb55;06338ae5;4efaff63;8d97ab13;5bc40f3b;93612ecb;d1531c78;3ad53af3;539d9efc;51c53726;dad8c4f6;54d47014;ca3f2
a72;2042f201</AC3>
<GE>847035b5;1986fb1c;5b09e6d2;2f21a093;d6767d8a;a69023bf;81a4bb21;7a32c7fc;4da53740;aebc80f9;cc5f99d2;9a43c789;2de3ca01;0991e400;ab1ad413;1b19637c;3973054e;830af7fc</GE>
<EC>9f3b407f;6f3192de</EC>
<FGL>7f4eceb5;535bc57a;f3aca00a;8f50d402;b068a44b;9b243cf8;f5cd9747;5e30a22d</FGL>
<GXC>7f4eceb5;9b243cf8</GXC>
<MD5>0a17be5c</MD5>

//
	
	Node 1: IP = 192.168.8.100, TCP port = 52380
Node 2: IP = 195.27.31.226, TCP port = 80

GET /cok/lua/dr_fengdou_half_spine_d18d350ce469a9547584e6d9549e8b98_android.zip HTTP/1.1
Host: alicdn.zgirls.net
Accept: */*


HTTP/1.1 200 OK
Server: Tengine
Content-Type: application/zip
Content-Length: 208757
Connection: keep-alive
Date: Fri, 22 Sep 2017 21:50:36 GMT
Last-Modified: Thu, 14 Sep 2017 10:22:23 GMT
ETag: "59ba585f-32f75"
Accept-Ranges: bytes
Via: cache51.l2de1[160,304-0,H], cache6.l2de1[161,0], cache2.de1[0,200-0,H], cache8.de1[1,0]
Age: 2771
X-Cache: HIT TCP_MEM_HIT dirn:2:330336810 mlen:-1
X-Swift-SaveTime: Fri, 22 Sep 2017 21:50:17 GMT
X-Swift-CacheTime: 3600
Timing-Allow-Origin: *
EagleId: c31b1fd015061198072456917e

PK
     C–-K              spine/UT	 ^
ąY^
ąYux
 ő     PK
     C–-K              spine/fengdou_half_spine/UT	 ^
ąY^
ąYux
 ő     PK    C–-Ksđ©•‡   6  spine/fengdou_half_spine/_alpha_fengdou_half_spine.pkmUT	 ^
ąY^
