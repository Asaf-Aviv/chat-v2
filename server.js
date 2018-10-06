const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 5000;
const server = http.Server(app);
const io = require('socket.io')(server);

const uploadHandler = require('./uploadHandler');

app.use('/file', express.static('uploads'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./socketHandler').init(io);

// app.get('/file/:fileName', (req, res, next) => {

//   const options = {
//     root: `${__dirname}/uploads/`,
//     dotfiles: 'deny',
//   };

//   const { fileName } = req.params;
//   res.sendFile(fileName, options, (err) => {
//     if (err) {
//       next(err);
//     } else {
//       console.log('Sent:', fileName);
//     }
//   });
// });

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
