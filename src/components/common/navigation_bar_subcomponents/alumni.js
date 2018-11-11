import React from "react";
import { connect } from "react-redux";
import {LogoutButton} from '../logout-button';
import {Nav,NavItem,NavLink} from "reactstrap";
import store from "../../../store";
import {select_in_navbar} from "../../../actions/alumni"
const alumni_navb=(props)=>{
  const buttons = ["Profile","Friends","BlackList","Search alumni","Account settings","My statuses"];
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
  store.dispatch(select_in_navbar(element));
}
const mapStateToProps = state => {
  return { section:state.alumni_reducer.main_navbar_selection };
};
export const ALUMNI_NAVBAR = connect(mapStateToProps)(alumni_navb);
