import React from "react";
import { connect } from "react-redux";

const body = props =>{
  return <div>account settings</div>
}
const mapStateToProps = state => {

}

export const AccountSettings =  connect(mapStateToProps)(body);
