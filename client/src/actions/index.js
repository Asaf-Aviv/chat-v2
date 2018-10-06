import * as types from './types';
import colors from '../utils/colors';

export const addFile = message => ({
  type: types.ADD_FILE,
  payload: message,
});

export const setNickname = nickname => ({
  type: types.SET_NICKNAME,
  payload: nickname,
});

export const selfJoinRoom = roomName => ({
  type: types.SELF_JOIN_ROOM,
  payload: roomName,
});

export const selfLeaveRoom = roomName => ({
  type: types.SELF_LEAVE_ROOM,
  payload: roomName,
});

export const newRoom = roomName => ({
  type: types.ADD_NEW_ROOM,
  payload: roomName,
});

export const initRoomMessages = roomName => ({
  type: types.INIT_ROOM_MESSAGES,
  payload: roomName,
});

export const delRoomMessages = roomName => ({
  type: types.DEL_ROOM_MESSAGES,
  payload: roomName,
});


export const setUsersList = (usersList, roomName) => ({
  type: types.SET_USERS_LIST,
  payload: {
    roomName,
    usersList: usersList.reduce((newObj, userObj) => {
      /* eslint-disable no-param-reassign */
      newObj[userObj.nickname] = {
        ...userObj,
        color: colors.pickRandomColor(),
      };
      /* eslint-enable no-param-reassign */
      return newObj;
    }, {}),
  },
});

export const setRoomsList = roomsList => ({
  type: types.SET_ROOMS_LIST,
  payload: roomsList,
});

export const addToUsersList = (user, roomName) => ({
  type: types.ADD_TO_USERS_LIST,
  payload: {
    user: {
      ...user,
      color: colors.pickRandomColor(),
    },
    roomName,
  },
});

export const removeFromUsersList = (nickname, roomName) => ({
  type: types.REMOVE_FROM_USERS_LIST,
  payload: {
    nickname,
    roomName,
  },
});

export const removeUsersList = roomName => ({
  type: types.REMOVE_USERS_LIST,
  payload: roomName,
});

export const userStatusChange = (user, roomName) => ({
  type: types.USER_STATUS_CHANGE,
  payload: {
    user,
    roomName,
  },
});

export const newRoomMessage = message => ({
  type: types.NEW_MESSAGE,
  payload: message,
});
