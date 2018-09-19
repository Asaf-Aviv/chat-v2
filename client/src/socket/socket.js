import openSocket from 'socket.io-client';
import store from '../store';
import * as actions from '../actions';

const socket = openSocket();

socket.on('initialConnection', () => {
  socket.emit('getRoomsList');
  socket.emit('joinRoom', 'Lobby');
});

socket.on('selfJoinRoom', (roomName) => {
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

socket.on('userJoinRoom', (user, roomName) => {
  store.dispatch(actions.userJoinMessage(user.nickname, roomName));
  store.dispatch(actions.addToUsersList(user, roomName));
});

socket.on('userLeftRoom', (user, roomName) => {
  store.dispatch(actions.userLeftMessage(user.nickname, roomName));
  store.dispatch(actions.removeFromUsersList(user, roomName));
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

socket.on('userStatusChange', (user, roomsList) => {
  store.dispatch(actions.userStatusChange(user, roomsList));
});

socket.on('userDisconnected', (user, roomName) => {
  store.dispatch(actions.userDisconnected(user.nickname, roomName));
  store.dispatch(actions.removeFromUsersList(user, roomName));
});

export default socket;
