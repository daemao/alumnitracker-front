const initialState = {
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state,personal_info:action.payload };
    case "LOGOUT":
      return {...state,personal_info:undefined}
    default:
      return state;
  }
};
export default rootReducer
