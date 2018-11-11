import React from "react";
import { connect } from "react-redux";

const body = props =>{
  return <div>MyStatuses</div>
}
const mapStateToProps = state => {

}

export const MyStatuses =  connect(mapStateToProps)(body);
