import {CAC_ADMIN} from '../constants/index'
const cac_admin_reducer = (state={}, action) => {
  switch (action.type) {
    case CAC_ADMIN.SELECT_NAVBAR:
      return { ...state, navbar_section:action.payload};
    case CAC_ADMIN.ADD_TO_ORGANIZATIONS_FILTER:{
      return {...state,...action.payload}
    }
    default:
      return state;
  }
};
export default cac_admin_reducer
