
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyparser = require('body-parser');

app.use(bodyparser.json());




  /*
  Return all the counters with current queue via HTTP GET
  */
app.get('/api/hello.json', function (req, res) {
  console.log('GET', req.path);
  res.send('Hello World!');
});




  /*
  Setup Socket.IO lifecycle and events here
  */
io.on('connection', function(socket) {
  socket.broadcast.emit('enter');
  socket.on('disconnect', function() {
    socket.broadcast.emit('exit');
  });
});



  /*
  Start up the server
  */
var server = http.listen(8080, function(){
  console.log('Listening on port %d', server.address().port);
});
