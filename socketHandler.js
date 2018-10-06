const capitalize = require('lodash.capitalize');

module.exports = {
  init(io) {
    const connectedUsers = {};
    const roomsList = ['Lobby', 'Music', 'Shows'];

    function createMessage(action, nickname, roomName) {
      let phrase = `has ${action === 'leave' ? 'left' : 'joined'} the room`;
      if (action === 'disconnect') {
        phrase = 'has been disconnected';
      }
      return {
        type: 'admin',
        nickname: '',
        roomName,
        body: `${nickname} ${phrase}`,
        timestamp: Date.now(),
      };
    }

    function welcomeMessage(roomName) {
      return {
        type: 'admin',
        nickname: '',
        roomName,
        body: `Now talking in ${roomName}`,
        timestamp: Date.now(),
      };
    }

    function getUsersList(roomName) {
      return new Promise((resolve) => {
        io.in(roomName).clients((error, clients) => {
          if (error) resolve([]);

          const usersList = clients.map(clientId => connectedUsers[clientId]);
          resolve(usersList);
        });
      });
    }

    function getSocketRooms(socket) {
      return Object.keys(socket.rooms).slice(1);
    }

    io.on('connection', (socket) => {
      socket.on('setNickname', (nickname, isTakenCb) => {
        const nicknameExists = Object.values(connectedUsers)
          .find(user => user.nickname.toLowerCase() === nickname.toLowerCase());

        if (nicknameExists) {
          isTakenCb(true);
          return;
        }

        connectedUsers[socket.id] = {
          nickname,
          isAway: false,
        };

        isTakenCb(false);
        socket.emit('initialConnection');
      });

      socket.on('newRoomMessage', (message) => {
        io.to(message.roomName).emit('newRoomMessage', message);
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
        const user = connectedUsers[socket.id];
        if (Object.keys(socket.rooms).includes(roomName)) {
          return;
        }

        socket
          .join(roomName)
          .emit('getUsersList', await getUsersList(roomName), roomName)
          .emit('selfJoinRoom', roomName)
          .to(roomName)
          .emit('userJoinRoom', user, roomName)
          .to(roomName)
          .emit(
            'newRoomMessage',
            createMessage('join', user.nickname, roomName),
          )
          .emit('newRoomMessage', welcomeMessage(roomName));
      });

      socket.on('leaveRoom', (roomName) => {
        const { nickname } = connectedUsers[socket.id];
        socket
          .leave(roomName)
          .emit('selfLeaveRoom', roomName)
          .to(roomName)
          .emit(
            'newRoomMessage',
            createMessage('leave', nickname, roomName),
          )
          .to(roomName)
          .emit('userLeftRoom', nickname, roomName);
      });

      socket.on('userStatusChange', () => {
        connectedUsers[socket.id].isAway = !connectedUsers[socket.id].isAway;
        const socketRooms = getSocketRooms(socket);
        socketRooms.forEach((roomName) => {
          io.in(roomName).emit('userStatusChange', connectedUsers[socket.id], roomName);
        });
      });

      socket.on('getRoomsList', () => socket.emit('getRoomsList', roomsList));

      socket.on('disconnecting', () => {
        const user = connectedUsers[socket.id];
        if (user) {
          const socketRooms = getSocketRooms(socket);

          socketRooms.forEach((roomName) => {
            socket
              .to(roomName)
              .emit(
                'newRoomMessage',
                createMessage('disconnect', user.nickname, roomName),
              )
              .to(roomName)
              .emit('userLeftRoom', user.nickname, roomName);
          });
          delete connectedUsers[socket.id];
        }
      });
    });
    return this;
  },
};
