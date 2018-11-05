import {CAC_ADMIN} from '../constants/index'
const cac_admin_reducer = (state={}, action) => {
  switch (action.type) {
    case CAC_ADMIN.SELECT_NAVBAR:
      return { ...state, navbar_section:action.payload};
    case CAC_ADMIN.ADD_TO_ORGANIZATIONS_FILTER:{
      return {...state,
        all_organizations: state.all_organizations.map((element) => element._id === action.payload ?
            // transform the one with a matching id
            { ...element, selected: false } :
            // otherwise return original todo
            element
        )
      }
    }
    case CAC_ADMIN.GO_TO_INDEX_IN_NAVBAR_IN_NU_MANAGEMENT:{
      if(state.nu_management_navigation)  return {...state,
          nu_management_navigation:state.nu_management_navigation.filter((elem,index)=>index <= action.payload)
        }
        else return {
          ...state
        }
    }
    case CAC_ADMIN.SAVE_AVAILABLE_NU_SCHOOLS:{
      if(action.program==="masters")return {...state,masters_schools:action.payload};
      else return {...state,bachelor_schools:action.payload}
    }
    case CAC_ADMIN.OPEN_CREATE_NEW_SCHOOL_IN_NU_MANAGEMENT:{
      return {...state,create_new_school_modal:true}
    }
    case CAC_ADMIN.CLOSE_CREATE_NEW_SCHOOL_IN_NU_MANAGEMENT:{
      return {...state,create_new_school_modal:false};
    }
    case CAC_ADMIN.SAVE_AVAILABLE_NU_DEPARTMENTS:{
      return {...state, nu_departments:{school:action.school, departments:action.payload}}
    }
    case CAC_ADMIN.CREATE_NEW_ALUMNI_MODAL_OPEN:{
      return {...state,create_new_alumni_modal:true}
    }
    case CAC_ADMIN.CREATE_NEW_ALUMNI_MODAL_CLOSE:{
      return {...state,create_new_alumni_modal:false}
    }
    case CAC_ADMIN.SAVE_ALL_ALUMNI:{
      return {...state, all_alumni:action.payload}
    }
    case CAC_ADMIN.CREATE_NEW_INDUSTRY_MODAL_OPEN:{
      return {...state, create_industry_modal:true}
    }
    case CAC_ADMIN.CREATE_NEW_INDUSTRY_MODAL_CLOSE:{
      return {...state, create_industry_modal:false}
    }
    case CAC_ADMIN.RESET_NAVIGATION_IN_NU_MANAGEMENT:{
      return {...state, nu_management_navigation:[]}
    }
    case CAC_ADMIN.PUSH_TO_NAVIGATION_IN_NU_MANAGEMENT:{
      if(!state.nu_management_navigation)return {...state,nu_management_navigation:[action.payload]};
      return {...state, nu_management_navigation:[...state.nu_management_navigation,action.payload]}
    }
    case CAC_ADMIN.REMOVE_FROM_ORGANIZATIONS_FILTER:{
      return {...state,
        all_organizations: state.all_organizations.map((element) => element._id  === action.payload ?
            // transform the one with a matching id
            { ...element, selected: true } :
            // otherwise return original todo
            element
        )
      }
    }
    case CAC_ADMIN.SAVE_AVAILABLE_UNIVERSITIES:{
      return {...state,all_universities:action.payload}
    }
    case CAC_ADMIN.SELECT_UNIVERSITY:{
      return {...state, selected_university:action.payload}
    }
    case CAC_ADMIN.CREATE_NEW_SUBINDUSTRY_MODAL_OPEN:
      return {...state,create_subindustry_modal:true}
    case CAC_ADMIN.CREATE_NEW_SUBINDUSTRY_MODAL_CLOSE:
      return {...state,create_subindustry_modal:false}
      case CAC_ADMIN.CREATE_NEW_ORGANIZATION_MODAL_OPEN:
        return {...state,create_organization_modal:true}
      case CAC_ADMIN.CREATE_NEW_ORGANIZATION_MODAL_CLOSE:
        return {...state,create_organization_modal:false}
    case CAC_ADMIN.SAVE_AVAILABLE_INDUSTRIES:
      return {...state,all_industries:action.payload}
    case CAC_ADMIN.ADD_INDUSTRY_TO_FILTER:
        return {...state,
          all_industries: state.all_industries.map((element,index) => index === action.payload ?
              // transform the one with a matching id
              { ...element, selected: true } :
              // otherwise return original todo
              element
          ),
          all_subindustries:state.all_subindustries.map((element,index)=>{
            if(element.industry === state.all_industries[action.payload]._id){
              return {...element , selected:true}
            }else{
              return element
            }
          }),
          all_organizations:state.all_organizations.map((organization,index)=>{
            for (let j = 0;j<state.all_subindustries.length;j++){
              if(state.all_subindustries[j].industry===state.all_industries[action.payload]._id){
                for(let k=0;k<state.all_subindustries[j].organizations.length;k++){
                  if(state.all_subindustries[j].organizations[k]._id===organization._id){
                    return{...organization,selected:true}
                  }
                }
              }
            }
            return organization
          })
         }
    case CAC_ADMIN.RESET_FILTER :
      return {...state,
        all_industries:state.all_industries.map(ind=>{
          return {...ind,selected:true}
        }),
        all_subindustries:state.all_subindustries.map(sub=>{
          return {...sub,selected:true}
        }),
        all_organizations:state.all_organizations.map(org=>{
          return {...org,selected:true}
        })

      };
    case CAC_ADMIN.SELECT_IN_FILTER:{
      return {...state,
        filter_selected_info:action.payload
      }
    }
    case CAC_ADMIN.REMOVE_INDUSTRY_FROM_FILTER :
      return {...state,
        all_industries: state.all_industries.map((element,index) => index === action.payload ?
            { ...element, selected: false } :
            element
        ),
        all_subindustries:state.all_subindustries.map((element,index)=>{
          if(element.industry === state.all_industries[action.payload]._id){
            return {...element , selected:false}
          }else{
            return element
          }
        }),
        all_organizations:state.all_organizations.map((organization,index)=>{
          for (let j = 0;j<state.all_subindustries.length;j++){
            if(state.all_subindustries[j].industry===state.all_industries[action.payload]._id){
              for(let k=0;k<state.all_subindustries[j].organizations.length;k++){
                if(state.all_subindustries[j].organizations[k]._id===organization._id){
                  return{...organization,selected:false}
                }
              }
            }
          }
          return organization
        })
       }
    case CAC_ADMIN.REMOVE_SUBINDUSTRY_FROM_FILTER :
      return {...state,
        all_subindustries: state.all_subindustries.map((element,index) => element._id === action.payload ?
            { ...element, selected: false } :
            element
        ),
        all_organizations:state.all_organizations.map(element=>{
          return element.subindustry === action.payload ?
          { ...element, selected: false } :
          element
        })
      }
    case CAC_ADMIN.ADD_SUBINDUSTRY_TO_FILTER :
        return {...state,
          all_subindustries: state.all_subindustries.map((element,index) => element._id === action.payload ?
              // transform the one with a matching id
              { ...element, selected: true } :
              // otherwise return original todo
              element
          ),
          all_organizations:state.all_organizations.map(element=>{
            return element.subindustry === action.payload ?
            { ...element, selected: true } :
            element
          })
        }
    case CAC_ADMIN.SAVE_AVAILABLE_SUBINDUSTRIES:{
      return {...state,all_subindustries:action.payload}
    }
    case CAC_ADMIN.SAVE_AVAILABLE_ORGANIZATIONS:{
      return {...state,all_organizations:action.payload}
    }
    case CAC_ADMIN.CREATE_NEW_UNIVERSITY_MODAL_OPEN:{
      return {...state, create_university_modal:true}
    }
    case CAC_ADMIN.CREATE_NEW_UNIVERSITY_MODAL_CLOSE:{
      return {...state, create_university_modal:false}
    }
    case CAC_ADMIN.CLOSE_EDIT_UNIVERSITY_MODAL:{
      return {...state,edit_university_modal:false}
    }
    case CAC_ADMIN.OPEN_EDIT_UNIVERSITY_MODAL:{
      return {...state, edit_university_modal:true}
    }
    case CAC_ADMIN.OPEN_ADD_NEW_DEPARTMENT_MODAL:{
      return {...state, add_new_department_modal:true}
    }
    case CAC_ADMIN.CLOSE_CREATE_NEW_DEPARTMENT_IN_SCHOOL_MANAGEMENT:{
      return {...state, create_nu_department:false}
    }
    case CAC_ADMIN.OPEN_CREATE_NEW_DEPARTMENT_IN_SCHOOL_MANAGEMENT:{
      return {...state, create_nu_department:true}
    }
    case CAC_ADMIN.CLOSE_ADD_NEW_DEPARTMENT_MODAL:{
      return {...state, add_new_department_modal:false}
    }
    default:
      return state;
  }
};
export default cac_admin_reducer
