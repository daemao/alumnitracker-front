import React from "react";
import { connect } from "react-redux";
import {NavBar} from "./NU_management_section/navbar";
import {ProgramSelector} from "./NU_management_section/select_program";
import {SchoolSelector} from "./NU_management_section/select_school";
import {DepartmentSelector} from "./NU_management_section/department_selector";
import {DepartmentManagement} from "./NU_management_section/department_management"
import axios from "axios"
import {get_schools_by_program,get_departments_by_school} from "./NU_management_section/builder";
class nu_management extends React.Component{
  constructor(props){
    super(props);
    this.state={
      bachelor_schools:[],
      masters_schools:[]
    }
  }
  render(){
    var Body;
    if(!this.props.navigation_tabs ||this.props.navigation_tabs.length<=1){
      Body = <ProgramSelector />
    }
    else{
      var last_element = this.props.navigation_tabs[this.props.navigation_tabs.length - 1];
      var first_element = this.props.navigation_tabs[1];
      switch(last_element){
        case "masters" :{
          Body=<SchoolSelector program = "masters"/>;
          break;
        }
        case "bachelor":{
          Body=<SchoolSelector program = "bachelor"/>;
          break;
        }
      }
      if(last_element.endsWith("school_selector")===true){
        Body = <DepartmentSelector program = {first_element} school = {last_element.substr(0,last_element.length - 15)}/>
      }
      else if(last_element.endsWith("department_selector")===true){
        Body = <DepartmentManagement />
      }
    }
    return (<div>
      <h1> Nu management section</h1>
      <NavBar/>
      {Body}
  </div>)
  }
}
const mapStateToProps = state => {
  return {jwt:state.authentification.jwt, navigation_tabs:state.cac_admin_reducer.nu_management_navigation};
};
const NU_management = connect(mapStateToProps)(nu_management);
export  {NU_management};
