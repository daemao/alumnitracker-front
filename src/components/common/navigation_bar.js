import React from 'react';
import {CAC_NAVBAR as CacNavbar, ALUMNI_NAVBAR as Alumni_Navbar} from "./navigation_bar_subcomponents";
import { connect } from "react-redux";


//design
const navigation = (props)=>{
  if(props.user.user_type === "alumni"){
    return <Alumni_Navbar />
  }
  else if(props.user.user_type === "cac_admin") return <CacNavbar/>
}

//functionality
const mapStateToProps = state => {
  return { user: state.authentification.info };
};
const Navigation = connect(mapStateToProps)(navigation);
export  {Navigation};
