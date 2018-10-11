import { LOGIN,LOGOUT } from "../constants/index";
export const login = user => ({ type: LOGIN, payload: user });
export const logout = ()=>({type:LOGOUT,payload:null});
