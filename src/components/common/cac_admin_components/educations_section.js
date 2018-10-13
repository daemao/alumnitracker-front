import React from "react";
import { connect } from "react-redux";
const educations = (props)=>{
  return (<div>Education section</div>)
}
const mapStateToProps = state => {
  return {};
};
const Education = connect(mapStateToProps)(educations);
export  {Education};
