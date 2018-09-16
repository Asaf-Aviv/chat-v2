import openSocket from 'socket.io-client';
import store from '../store';
import * as actions from '../actions';

const socket = openSocket();

socket.on('initialConnection', () => {
  socket.emit('joinRoom', 'Lobby');
  socket.emit('getRoomsList');
});

socket.on('joinRoom', (roomName) => {
  store.dispatch(actions.selfJoinRoom(roomName));
});

socket.on('selfLeaveRoom', (roomName) => {
  store.dispatch(actions.selfLeaveJoinRoom(roomName));
});

socket.on('newRoomMessage', (message) => {
  store.dispatch(actions.newRoomMessage(message));
});

socket.on('newPrivateMessage', (message) => {
  store.dispatch(actions.newPrivateMessage(message));
});

socket.on('userJoinRoom', (nickname, roomName) => {
  store.dispatch(actions.userJoinMessage(nickname, roomName));
  store.dispatch(actions.addToUsersList(nickname, roomName));
});

socket.on('userLeftRoom', (nickname, roomName) => {
  store.dispatch(actions.userLeftMessage(nickname, roomName));
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

socket.on('userDisconnected', (nickname, roomName) => {
  store.dispatch(actions.userDisconnected(nickname, roomName));
  store.dispatch(actions.removeFromUsersList(nickname, roomName));
});

export default socket;
