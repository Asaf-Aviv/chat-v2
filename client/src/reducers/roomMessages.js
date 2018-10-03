export default (state = {}, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return {
        ...state,
        [action.payload.roomName]: [
          ...state[action.payload.roomName],
          action.payload,
        ],
      };
    case 'DEL_ROOM_MESSAGES':
      return Object.keys(state)
        .reduce((newObj, roomName) => {
          if (roomName !== action.payload) {
            /* eslint-disable no-param-reassign */
            newObj[roomName] = state[roomName];
            /* eslint-enable no-param-reassign */
          }
          return newObj;
        }, {});
    case 'INIT_ROOM_MESSAGES':
      return {
        ...state,
        [action.payload]: [],
      };
    default:
      return state;
  }
};
