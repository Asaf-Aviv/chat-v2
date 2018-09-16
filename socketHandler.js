const capitalize = require('lodash.capitalize');

module.exports = {
  init(io) {
    const connectedUsers = {};
    const roomsList = ['Lobby', 'Music', 'Shows'];

    function getUsersList(roomName) {
      return new Promise((resolve) => {
        io.in(roomName).clients((error, clients) => {
          if (error) resolve([]);

          const usersList = clients.map(clientId => connectedUsers[clientId]);
          resolve(usersList);
        });
      });
    }

    io.on('connection', (socket) => {
      socket.on('setNickname', (nickname, isTakenCb) => {
        const nicknameExists = Object.values(connectedUsers)
          .find(nick => nick.toLowerCase() === nickname.toLowerCase());

        if (nicknameExists) {
          isTakenCb(true);
          return;
        }

        isTakenCb(false);
        connectedUsers[socket.id] = nickname;
        socket.emit('initialConnection');
      });

      socket.on('newRoomMessage', (message) => {
        io.to(message.roomName).emit('newRoomMessage', message);
      });

      socket.on('privateMessage', (message, receiverNickname) => {
        const receiverId = Object.keys(connectedUsers
          .find(id => connectedUsers[id] === receiverNickname));

        io.to(receiverId).emit('newPrivateMessage', message);
      });

      socket.on('openRoom', (roomName, isAvailableCb) => {
        const capitalRoomname = roomName
          .split(' ').map(w => capitalize(w.trim())).join('');

        if (roomsList.includes(capitalRoomname)) {
          isAvailableCb(false);
          return;
        }

        roomsList.push(capitalRoomname);
        isAvailableCb(true, capitalRoomname);
        io.emit('newRoomOpened', capitalRoomname);
      });

      socket.on('joinRoom', async (roomName) => {
        if (Object.keys(socket.rooms).includes(roomName)) {
          return;
        }
        socket
          .join(roomName)
          .emit('joinRoom', roomName)
          .emit('getUsersList', await getUsersList(roomName), roomName)
          .to(roomName)
          .emit(
            'userJoinRoom',
            connectedUsers[socket.id],
            roomName,
          );
      });

      socket.on('leaveRoom', (roomName) => {
        socket
          .leave(roomName)
          .emit('selfLeaveRoom', roomName)
          .to(roomName)
          .emit(
            'userLeftRoom',
            connectedUsers[socket.id],
            roomName,
          );
      });

      socket.on('getRoomsList', () => socket.emit('getRoomsList', roomsList));

      socket.on('disconnecting', () => {
        if (connectedUsers[socket.id]) {
          Object.keys(socket.rooms).slice(1).forEach((roomName) => {
            socket.to(roomName).emit(
              'userDisconnected',
              connectedUsers[socket.id],
              roomName,
            );
          });
          delete connectedUsers[socket.id];
        }
      });
    });
  },
};
