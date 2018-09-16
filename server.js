const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 5000;
const server = http.Server(app);
const io = require('socket.io')(server);

const socketHandler = require('./socketHandler');

socketHandler.init(io);

server.listen(port, () => console.log(`listening on port ${port}`));
