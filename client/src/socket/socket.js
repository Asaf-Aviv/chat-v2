import initSocket from 'socket.io-client';
import store from '../store';
import * as actions from '../actions';

const socket = initSocket();

socket.on('initialConnection', () => {
  socket.emit('getRoomsList');
  socket.emit('joinRoom', 'Lobby');
});

socket.on('selfJoinRoom', (roomName) => {
  store.dispatch(actions.selfJoinRoom(roomName));
  store.dispatch(actions.initRoomMessages(roomName));
});

socket.on('uploadedFile', (file, roomName) => {
  store.dispatch(actions.addFile(file, roomName));
});

socket.on('selfLeaveRoom', (roomName) => {
  store.dispatch(actions.delRoomMessages(roomName));
  store.dispatch(actions.selfLeaveRoom(roomName));
  store.dispatch(actions.removeUsersList(roomName));
});

socket.on('newRoomMessage', (message) => {
  store.dispatch(actions.newRoomMessage(message));
});

socket.on('userJoinRoom', (user, roomName) => {
  store.dispatch(actions.addToUsersList(user, roomName));
});

socket.on('userLeftRoom', (nickname, roomName) => {
  store.dispatch(actions.removeFromUsersList(nickname, roomName));
});

socket.on('newRoomOpened', (roomName) => {
  store.dispatch(actions.newRoom(roomName));
});

socket.on('getUsersList', (usersList, roomName) => {
  store.dispatch(actions.setUsersList(usersList, roomName));
});

socket.on('getRoomsList', (roomsList) => {
  store.dispatch(actions.setRoomsList(roomsList));
});

socket.on('userStatusChange', (user, roomName) => {
  store.dispatch(actions.userStatusChange(user, roomName));
});

export default socket;
