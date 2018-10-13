import React from "react";
import { connect } from "react-redux";
const cac_navb=(props)=>{
  const buttons = ["Organizations","Education","Nu university management"]
  return (
    <ul>
      {buttons.map((elem,index)=><li key={index}>{elem}</li>)}
      <li>Logout</li>
    </ul>
  )
}

const mapStateToProps = state => {
  return { section:state };
};
export const CAC_NAVBAR = connect(mapStateToProps)(cac_navb);
