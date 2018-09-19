import * as types from './types';

export const setNickname = nickname => ({
  type: types.SET_NICKNAME,
  payload: nickname,
});

export const setUsersList = (usersList, roomName) => ({
  type: types.SET_USERS_LIST,
  payload: {
    roomName,
    usersList: usersList.reduce((newObj, userObj) => {
      /* eslint-disable no-param-reassign */
      newObj[userObj.nickname] = userObj;
      /* eslint-enable no-param-reassign */
      return newObj;
    }, {}),
  },
});

export const setRoomsList = roomsList => ({
  type: types.SET_ROOMS_LIST,
  payload: roomsList,
});

export const newRoom = roomName => ({
  type: types.NEW_ROOM,
  payload: roomName,
});

export const addToUsersList = (user, roomName) => ({
  type: types.USER_JOIN_ROOM,
  payload: {
    user,
    roomName,
  },
});

export const newPrivateMessage = message => ({
  type: types.NEW_PRIVATE_MESSAGE,
  payload: message,
});

export const userDisconnected = (nickname, roomName) => ({
  type: types.USER_DISCONNECTED,
  payload: {
    type: 'admin',
    nickname,
    roomName,
    body: ' has been disconnected',
    timestamp: Date.now(),
  },
});

export const selfJoinRoom = roomName => ({
  type: types.SELF_JOIN_ROOM,
  payload: roomName,
});

export const selfLeaveJoinRoom = roomName => ({
  type: types.SELF_LEAVE_ROOM,
  payload: roomName,
});

export const removeFromUsersList = (user, roomName) => ({
  type: types.USER_LEFT_ROOM,
  payload: {
    user,
    roomName,
  },
});

export const userLeftMessage = (nickname, roomName) => ({
  type: types.USER_LEFT_MESSAGE,
  payload: {
    type: 'admin',
    nickname,
    roomName,
    body: ' has left the room',
    timestamp: Date.now(),
  },
});

export const userJoinMessage = (nickname, roomName) => ({
  type: types.USER_JOIN_MESSAGE,
  payload: {
    type: 'admin',
    nickname,
    roomName,
    body: ' has joined the room',
    timestamp: Date.now(),
  },
});

export const userStatusChange = (user, roomsList) => ({
  type: types.USER_STATUS_CHANGE,
  payload: {
    user,
    roomsList,
  },
});

export const newRoomMessage = message => ({
  type: types.NEW_ROOM_MESSAGE,
  payload: message,
});
