import {LOGIN, LOGOUT} from '../constants/index'
const authentification = (state={}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state,...action.payload };
    case LOGOUT:
      return {}
    default:
      return state;
  }
};
export default authentification
