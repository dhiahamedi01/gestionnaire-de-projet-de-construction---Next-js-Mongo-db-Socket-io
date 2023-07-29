const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const socketController = require('./socketController');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socketController.handleConnection(socket, io);
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
