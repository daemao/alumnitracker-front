import { LOGIN,LOGOUT, CAC_ADMIN } from "../constants/index";
export const login = user => ({ type: LOGIN, payload: user });
export const logout = ()=>({type:LOGOUT,payload:null});
export const select_section_in_navbar = (element)=>({type:CAC_ADMIN.SELECT_NAVBAR,payload:element})
export const add_to_organizations_filter= element=>({tyep:CAC_ADMIN.ADD_TO_ORGANIZATIONS_FILTER,payload:element})
