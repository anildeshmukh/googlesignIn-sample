const initialState = {
  username: '',
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
}
