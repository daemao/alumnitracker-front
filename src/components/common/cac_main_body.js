import React from "react";
import { connect } from "react-redux";
import {Education} from './cac_admin_components/educations_section';
import {Organizations} from './cac_admin_components/organizations_section';
import {NU_management} from './cac_admin_components/NU_management';
import {Account_settings} from './cac_admin_components/account_settings';
const profile_body = (props)=>{
  switch(props.section){
    case "organizations":return <Organizations />
    case "education":return <Education />
    case "nu university management": return <NU_management />
    case "account settings":return <Account_settings />
    default:return <div>ds</div>
  }
  return (<div>Selected section:{props.section}</div>)
}
const mapStateToProps = state => {
  return { section:state.cac_admin_reducer.navbar_section };
};
const ProfileBody = connect(mapStateToProps)(profile_body);
export  {ProfileBody};
