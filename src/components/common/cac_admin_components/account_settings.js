import React from "react";
import { connect } from "react-redux";
const account_settings = (props)=>{
  return (<div>Account section</div>)
}
const mapStateToProps = state => {
  return {};
};
const Account_settings = connect(mapStateToProps)(account_settings);
export  {Account_settings};
