import React from "react";
import { connect } from "react-redux";

const body = props =>{
  return <div>Profile page body</div>
}
const mapStateToProps = state => {

}

export const ProfilePage =  connect(mapStateToProps)(body);
