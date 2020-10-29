const PORT = process.env.PORT || 8888
const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');
const httpServer = require('http').createServer((req, res) => {
  // serve the index.html file
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
});
const io = require('socket.io')(httpServer);
io.on('connect', socket => {



    socket.on('audio', data => {
        console.log(data)
      socket.broadcast.emit('got', data)
    });






    
  });
httpServer.listen(PORT, () => {
  console.log('go to http://localhost:'+PORT);
});