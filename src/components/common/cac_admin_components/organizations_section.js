import React from "react";
import { connect } from "react-redux";
const organizations = (props)=>{
  return (
    <div>
      <div>industries: list of industries</div>
      <div>subindustries: list of subindustries</div>
    </div>
  )
}
const mapStateToProps = state => {
  return {  };
};
const Organizations = connect(mapStateToProps)(organizations);
export  {Organizations};
