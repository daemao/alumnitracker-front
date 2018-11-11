import {ALUMNI_ACTIONS} from "../constants/alumni";
const alumni_reducer = (state={},action)=>{
  switch (action.type) {
    case ALUMNI_ACTIONS.SELECT_IN_MAIN_NAVBAR :
      return {...state, main_navbar_selection:action.payload}
    default:
      return state;
  }
}
export default alumni_reducer;
