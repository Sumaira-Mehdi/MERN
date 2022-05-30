import express from "express";
import http from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const server = http.createServer(app);
import {Server} from "socket.io";
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  

  
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg);
      });
  
 // io.on('connection', function (socket) {
    //console.log( socket.client.conn.server.clientsCount + " users connected" );
//});
let usersCount = socket.client.conn.server.clientsCount;
socket.emit("counter",usersCount);
});
});
server.listen(3000, () => {
    console.log('listening on *:3000');
  });