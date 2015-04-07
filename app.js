var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000, function(){
  console.log('listening on *:3000');
});

/*var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(3000);
*/
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection',function(socket){
	socket.on('send message',function(data){
		io.sockets.emit('new message',data);
		/*socket.broadcast.emit('new message',data);*/
	});
});