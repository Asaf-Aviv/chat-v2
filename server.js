const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 5000;
const server = http.Server(app);
const io = require('socket.io')(server);
const path = require('path');

const uploadHandler = require('./uploadHandler');

app.use('/file', express.static('uploads'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/dist')));

require('./socketHandler').init(io);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'client/dist', 'index.html')));

app.post('/upload', uploadHandler, (req, res) => {
  const { roomName, nickname } = req.body;
  const { file } = req;

  const message = {
    type: 'user',
    roomName,
    nickname,
    body: '',
    timestamp: Date.now(),
    file,
  };

  io.in(roomName).emit('uploadedFile', message);
  res.send();
});

server.listen(port, () => console.log(`listening on port ${port}`));
