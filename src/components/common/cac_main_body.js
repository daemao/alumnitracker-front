import React from "react";
import { connect } from "react-redux";
import {Education} from './cac_admin_components/educations_section';
import {Organizations} from './cac_admin_components/organizations_section';
import {NU_management as NUManagement} from './cac_admin_components/NU_management';
import {Account_settings as AccountSettings} from './cac_admin_components/account_settings';
import {AlumniSection} from './cac_admin_components/alumni_section';
const profile_body = (props)=>{
  switch(props.section){
    case "organizations":return <Organizations />
    case "education":return <Education />
    case "alumni": return <AlumniSection />
    case "nu university management": return <NUManagement />
    case "account settings":return <AccountSettings />
    default:return <div>ds</div>
  }
}
const mapStateToProps = state => {
  return { section:state.cac_admin_reducer.navbar_section };
};
const ProfileBody = connect(mapStateToProps)(profile_body);
export  {ProfileBody};
