var express = require('express');
var app = express();
var path = require('path');


var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
    socket.on('chatMessage', function(msg){
        io.emit('chatMessage');
    });
})

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname,'index.html'));
});

//__dirname = absolute path of the directory the file is located in

server.listen(3000, function(){
    console.log('server is on!');
});