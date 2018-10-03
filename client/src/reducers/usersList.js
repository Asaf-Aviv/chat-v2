export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USERS_LIST':
      return {
        ...state,
        [action.payload.roomName]: action.payload.usersList,
      };
    case 'ADD_TO_USERS_LIST':
      return {
        ...state,
        [action.payload.roomName]: {
          ...state[action.payload.roomName],
          [action.payload.user.nickname]: action.payload.user,
        },
      };
    case 'REMOVE_FROM_USERS_LIST':
      return {
        ...state,
        [action.payload.roomName]: Object.keys(state[action.payload.roomName])
          .reduce((newObj, nickname) => {
            if (nickname !== action.payload.nickname) {
              /* eslint-disable no-param-reassign */
              newObj[nickname] = state[action.payload.roomName][nickname];
              /* eslint-enable no-param-reassign */
            }
            return newObj;
          }, {}),
      };
    case 'REMOVE_USERS_LIST':
      return Object.keys(state)
        .reduce((newObj, roomName) => {
          if (roomName !== action.payload) {
            /* eslint-disable no-param-reassign */
            newObj[roomName] = state[roomName];
            /* eslint-enable no-param-reassign */
          }
          return newObj;
        }, {});
    case 'USER_STATUS_CHANGE':
      return Object.keys(state)
        .reduce((newObj, roomName) => {
          if (roomName === action.payload.roomName) {
            /* eslint-disable no-param-reassign */
            newObj[roomName] = {
              ...state[roomName],
              [action.payload.user.nickname]: {
                ...state[roomName][action.payload.user.nickname],
                isAway: action.payload.user.isAway,
              },
            };
            return newObj;
          }
          newObj[roomName] = { ...state[roomName] };
          /* eslint-enable no-param-reassign */
          return newObj;
        }, {});
    default:
      return state;
  }
};
