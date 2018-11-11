import React from "react";
import { connect } from "react-redux";

const body = props =>{
  return <div>Blacklist</div>
}
const mapStateToProps = state => {

}

export const BlackList =  connect(mapStateToProps)(body);
