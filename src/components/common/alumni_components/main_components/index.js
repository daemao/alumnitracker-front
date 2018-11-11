import React from "react";
import { connect } from "react-redux";
import {ProfilePage} from './profile_page';
import {FriendList} from './friendlist';
import {BlackList} from './blacklist';
import {SearchAlumni} from './searchalumni';
import {AccountSettings} from './account_settings';
import {MyStatuses} from "./my_statuses";
const profile_body = (props)=>{
  switch(props.section){
    case "profile":return <ProfilePage />
    case "friends":return <FriendList />
    case "blacklist": return <BlackList />
    case "search alumni": return <SearchAlumni />
    case "account settings":return <AccountSettings />
    case "my statuses":return <MyStatuses />
    default:return <div>Personal page of alumni</div>
  }
}
const mapStateToProps = state => {
  return { section:state.alumni_reducer.main_navbar_selection };
};
const ProfileBody = connect(mapStateToProps)(profile_body);
export  {ProfileBody};
