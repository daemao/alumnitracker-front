import { combineReducers } from 'redux';
import authentification from './authentification';
import cac_admin_reducer from './cac_admin_state';
import alumni_reducer from "./alumni"
export default combineReducers({
  authentification,
  alumni_reducer,
  cac_admin_reducer
})
