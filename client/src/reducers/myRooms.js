export default (state = [], action) => {
  switch (action.type) {
    case 'SELF_JOIN_ROOM':
      return [...state, action.payload];
    case 'SELF_LEAVE_ROOM':
      return state.filter(roomName => roomName !== action.payload);
    default:
      return state;
  }
};
