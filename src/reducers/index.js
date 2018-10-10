const initialState = {
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state,personal_info:action.payload };
    default:
      return state;
  }
};
export default rootReducer
