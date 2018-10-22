import React from 'react';
import {CAC_NAVBAR as CacNavbar} from "./navigation_bar_subcomponents";
import { connect } from "react-redux";


//design
const navigation = (props)=>{
  if(props.user.user_type === "alumni"){
    return <div>Navbar for alumni</div>
  }
  else if(props.user.user_type === "cac_admin") return <CacNavbar/>
}

//functionality
const mapStateToProps = state => {
  return { user: state.authentification.info };
};
const Navigation = connect(mapStateToProps)(navigation);
export  {Navigation};
