export default (state = {
  nickname: null,
  roomsList: [],
  myRooms: [],
  usersList: {},
  roomMessages: {},
  privateMessages: {},
}, action) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.payload,
      };
    case 'SET_USERS_LIST':
      return {
        ...state,
        usersList: {
          ...state.usersList,
          [action.payload.roomName]: action.payload.usersList,
        },
      };
    case 'SET_ROOMS_LIST':
      return {
        ...state,
        roomsList: action.payload,
      };
    case 'NEW_ROOM':
      return {
        ...state,
        roomsList: [...state.roomsList, action.payload],
      };
    case 'SELF_JOIN_ROOM':
      return {
        ...state,
        myRooms: [...state.myRooms, action.payload],
        roomMessages: {
          ...state.roomMessages,
          [action.payload]: [],
        },
        usersList: {
          ...state.usersList,
          [action.payload]: [],
        },
      };
    case 'SELF_LEAVE_ROOM':
      return {
        ...state,
        myRooms: state.myRooms
          .filter(roomName => roomName !== action.payload),
      };
    case 'USER_JOIN_ROOM':
      return {
        ...state,
        usersList: {
          ...state.usersList,
          [action.payload.roomName]: [
            ...state.usersList[action.payload.roomName],
            action.payload.nickname,
          ],
        },
      };
    case 'USER_LEFT_ROOM':
      return {
        ...state,
        usersList: {
          ...state.usersList,
          [action.payload.roomName]: state.usersList[action.payload.roomName]
            .filter(nickname => nickname !== action.payload.nickname),
        },
      };
    case 'USER_LEFT_MESSAGE':
      return {
        ...state,
        roomMessages: {
          ...state.roomMessages,
          [action.payload.roomName]: [
            ...state.roomMessages[action.payload.roomName],
            action.payload,
          ],
        },
      };
    case 'USER_JOIN_MESSAGE':
      return {
        ...state,
        roomMessages: {
          ...state.roomMessages,
          [action.payload.roomName]: [
            ...state.roomMessages[action.payload.roomName],
            action.payload,
          ],
        },
      };
    case 'USER_DISCONNECTED':
      return {
        ...state,
        roomMessages: {
          ...state.roomMessages,
          [action.payload.roomName]: [
            ...state.roomMessages[action.payload.roomName],
            action.payload,
          ],
        },
      };
    case 'NEW_PRIVATE_MESSAGE':
      return {
        ...state,
        privateMessages: {
          ...state.privateMessages,
          [action.payload.nickname]: [
            ...state.privateMessages[action.payload.nickname],
            action.payload,
          ],
        },
      };
    case 'NEW_ROOM_MESSAGE':
      return {
        ...state,
        roomMessages: {
          ...state.roomMessages,
          [action.payload.roomName]: [
            ...state.roomMessages[action.payload.roomName],
            action.payload,
          ],
        },
      };
    default: {
      return state;
    }
  }
};
