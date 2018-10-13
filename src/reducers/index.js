import { combineReducers } from 'redux';
import authentification from './authentification';
import cac_admin_reducer from './cac_admin_state';

export default combineReducers({
  authentification,
  cac_admin_reducer
})
