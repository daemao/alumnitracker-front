import store from "../store";
import { login,logout } from "../actions/index";
window.store = store;
window.login = login;
window.logout = logout;
