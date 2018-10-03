export default (state = null, action) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return action.payload;
    default:
      return state;
  }
};
