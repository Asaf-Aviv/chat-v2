export default (state = [], action) => {
  switch (action.type) {
    case 'SET_ROOMS_LIST':
      return action.payload;
    case 'ADD_NEW_ROOM':
      return [...state, action.payload];
    default:
      return state;
  }
};
