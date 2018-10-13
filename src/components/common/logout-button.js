import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import {logout} from "../../actions"
import store from "../../store";
import {NavLink} from "reactstrap"
//design part
const LogoutButtonClass = (props) =>{
  return (
    <NavLink onClick={(e)=>logout_handler(e,props.jwt)} {...props} > Logout</NavLink>
  )
}



//functionality part
const logout_handler=(e,token)=>{
  e.preventDefault();
  var headers = {};
  headers["x-auth"] = token;
  axios.get("/logout",{headers}).then(res=>{store.dispatch( logout())}).catch(err=>console.log(err));
}

const mapStateToProps = state => {
  return { jwt: state.authentification.jwt };
};
const LogoutButton = connect(mapStateToProps)(LogoutButtonClass);
export  {LogoutButton};
