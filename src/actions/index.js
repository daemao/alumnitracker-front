import { LOGIN,LOGOUT, CAC_ADMIN} from "../constants/index";
//authentification
export const login = user => ({ type: LOGIN, payload: user });
export const logout = ()=>({type:LOGOUT,payload:null});


//cac_admin
export const add_to_organizations_filter = element => ({type:CAC_ADMIN.ADD_TO_ORGANIZATIONS_FILTER,payload:element})
export const add_industry_to_filter      = element => ({type:CAC_ADMIN.ADD_INDUSTRY_TO_FILTER,payload:element})
export const add_subindustry_to_filter      = element => ({type:CAC_ADMIN.ADD_SUBINDUSTRY_TO_FILTER,payload:element})
export const close_new_subindustry_modal = ()=>({type:CAC_ADMIN.CREATE_NEW_SUBINDUSTRY_MODAL_CLOSE});
export const close_crete_new_university_modal = () =>({type:CAC_ADMIN.CREATE_NEW_UNIVERSITY_MODAL_CLOSE,});
export const close_create_new_organization_modal = ()=>({type:CAC_ADMIN.CREATE_NEW_ORGANIZATION_MODAL_CLOSE});
export const close_new_industry_modal = ()=>({type:CAC_ADMIN.CREATE_NEW_INDUSTRY_MODAL_CLOSE});
export const open_new_industry_modal = () =>({type:CAC_ADMIN.CREATE_NEW_INDUSTRY_MODAL_OPEN});
export const open_new_subindustry_modal = ()=>({type:CAC_ADMIN.CREATE_NEW_SUBINDUSTRY_MODAL_OPEN});
export const open_create_new_university_modal =()=> ({type:CAC_ADMIN.CREATE_NEW_UNIVERSITY_MODAL_OPEN})
export const open_create_new_organization_modal = ()=>({type:CAC_ADMIN.CREATE_NEW_ORGANIZATION_MODAL_OPEN});
export const remove_from_organizations_filter = element=>({type:CAC_ADMIN.REMOVE_FROM_ORGANIZATIONS_FILTER,payload:element});
export const remove_subindustry_from_filter      = element => ({type:CAC_ADMIN.REMOVE_SUBINDUSTRY_FROM_FILTER,payload:element})
export const remove_industry_from_filter = element => ({type:CAC_ADMIN.REMOVE_INDUSTRY_FROM_FILTER,payload:element})
export const reset_filter                = ()      => ({type:CAC_ADMIN.RESET_FILTER})
export const save_available_industries   = element => ({type:CAC_ADMIN.SAVE_AVAILABLE_INDUSTRIES,payload:element});
export const save_available_subindustries = element =>({type:CAC_ADMIN.SAVE_AVAILABLE_SUBINDUSTRIES,payload:element});
export const save_available_organizations = element =>({type:CAC_ADMIN.SAVE_AVAILABLE_ORGANIZATIONS,payload:element});
export const save_available_universities = element =>({type:CAC_ADMIN.SAVE_AVAILABLE_UNIVERSITIES,payload:element});
export const select_section_in_navbar    = element => ({type:CAC_ADMIN.SELECT_NAVBAR,payload:element})
export const select_in_filter = element=>({type:CAC_ADMIN.SELECT_IN_FILTER,payload:element})
export const select_university = element =>({type:CAC_ADMIN.SELECT_UNIVERSITY,payload:element});
//UNIVERSITY
export const open_edit_university_modal = ()=>({type:CAC_ADMIN.OPEN_EDIT_UNIVERSITY_MODAL});
export const close_edit_university_modal = ()=>({type:CAC_ADMIN.CLOSE_EDIT_UNIVERSITY_MODAL});
//UNIVERSITY/ADD_DEPARTMENT
export const open_add_new_department_modal = ()=>({type:CAC_ADMIN.OPEN_ADD_NEW_DEPARTMENT_MODAL});
export const close_add_new_department_modal = ()=>({type:CAC_ADMIN.CLOSE_ADD_NEW_DEPARTMENT_MODAL});
//ALUMNI
export const save_all_alumni_cac_admin = element =>({type:CAC_ADMIN.SAVE_ALL_ALUMNI,payload:element});
export const open_create_new_alumni_cac_admin = () =>({type:CAC_ADMIN.CREATE_NEW_ALUMNI_MODAL_OPEN});
export const close_create_new_alumni_cac_admin = () =>({type:CAC_ADMIN.CREATE_NEW_ALUMNI_MODAL_CLOSE});
// NU MANAGEMENT
export const reset_navigation_in_nu_management = ()=>({type:CAC_ADMIN.RESET_NAVIGATION_IN_NU_MANAGEMENT});
export const push_to_navigation_in_nu_management = element=>({type:CAC_ADMIN.PUSH_TO_NAVIGATION_IN_NU_MANAGEMENT,payload:element});
export const go_back_in_navigation_in_nu_management = element =>({type:CAC_ADMIN.GO_TO_INDEX_IN_NAVBAR_IN_NU_MANAGEMENT,payload:element});
