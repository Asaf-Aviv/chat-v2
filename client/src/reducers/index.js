import { combineReducers } from 'redux';
import nickname from './nickname';
import myRooms from './myRooms';
import globalRooms from './globalRooms';
import usersList from './usersList';
import roomMessages from './roomMessages';

export default combineReducers({
  nickname,
  globalRooms,
  roomMessages,
  usersList,
  myRooms,
});
