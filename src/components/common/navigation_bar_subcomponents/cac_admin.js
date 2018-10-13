import React from "react";
import { connect } from "react-redux";
import {LogoutButton} from '../logout-button';
import {Nav,NavItem,NavLink} from "reactstrap";
import store from "../../../store";
import {select_section_in_navbar} from "../../../actions/index"
const cac_navb=(props)=>{
  const buttons = ["Organizations","Education","Nu university management","Account settings"];
  return (
    <Nav justified pills fill>
      {buttons.map((elem,index)=>{
        return(
          <NavItem key={index}   onClick = {(e)=>handleSelectSection(elem.toLowerCase())}>
            <NavButton active={elem.toLowerCase()===props.section}>{elem}</NavButton>
          </NavItem>
        )
      })}
      <NavItem ><LogoutButton href="#" /></NavItem>
    </Nav>
  )
}
const NavButton = (props)=>{
  return <NavLink href="#" {...props}>{props.children}</NavLink>
}
const handleSelectSection = (element)=>{
  store.dispatch(select_section_in_navbar(element));
}
const mapStateToProps = state => {
  return { section:state.cac_admin_reducer.navbar_section };
};
export const CAC_NAVBAR = connect(mapStateToProps)(cac_navb);
