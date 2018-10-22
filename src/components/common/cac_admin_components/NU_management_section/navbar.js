import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {connect} from "react-redux";
import {go_back_in_navigation_in_nu_management,push_to_navigation_in_nu_management} from "../../../../actions/index";
import store from "../../../../store"
const navbar = (props) => {
  var tabs ;
  if(!props.tabs || props.tabs.length<1){
    store.dispatch(push_to_navigation_in_nu_management("programs"));
    return <NavBar/>
  }
  return (
    <div>
      <Breadcrumb tag="nav">
        {props.tabs.map((element,index)=><BreadcrumbItem onClick = {e=>store.dispatch(go_back_in_navigation_in_nu_management(index))} key ={ "subnavbar" + element}tag="a" href="#">{element.endsWith("school_selector")?element.substr(0,element.length-15):element}</BreadcrumbItem>)}
      </Breadcrumb>
    </div>
  );
};
const mapStateToProps = state=>{
  return {tabs:state.cac_admin_reducer.nu_management_navigation}
}
export  const NavBar = connect(mapStateToProps)(navbar);
