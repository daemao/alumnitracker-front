import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import {logout} from "../../actions"
import store from "../../store";
const LogoutButtonClass = (props) =>{
  return (
    <div onClick={(e)=>logout_handler(e,props.jwt)}> Logout</div>
  )
}
const logout_handler=(e,token)=>{
  e.preventDefault();
  var headers = {};
  headers["x-auth"] = token;
  axios.get("/logout",{headers}).then(res=>{store.dispatch( logout())}).catch(err=>console.log(err));
}

const mapStateToProps = state => {
  return { jwt: state.personal_info.jwt };
};
const LogoutButton = connect(mapStateToProps)(LogoutButtonClass);
export  {LogoutButton};
