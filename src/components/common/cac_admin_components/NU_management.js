import React from "react";
import { connect } from "react-redux";
const nu_management = (props)=>{
  return (<div>Nu management section</div>)
}
const mapStateToProps = state => {
  return {};
};
const NU_management = connect(mapStateToProps)(nu_management);
export  {NU_management};
