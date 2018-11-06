import React from 'react';
import {push_to_navigation_in_nu_management,save_available_departments} from"../../../../actions/index";
import store from "../../../../store";
import {connect } from "react-redux";
import axios from "axios";
import {AddButton} from "./create_new_departments";
import{get_departments_by_school_and_program} from "./API_calls"
class department_selector extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    get_departments_by_school_and_program(this.props.school,this.props.program,this.props.jwt,(err,res)=>{
      if(!err)store.dispatch(save_available_departments(res.data.departments, this.props.school));
      else console.log(err);
    });
  }
  render(){
    var body;
    if(!this.props.school)body =  <div>THere is no program defined</div>
    if(!this.props.departments) body =  <div>There is no any departments in {this.props.school}</div>
    else body =  (<div>
      {this.props.departments.map(element=><div onClick = {e=>{e.preventDefault();store.dispatch(push_to_navigation_in_nu_management(element.english_name+"department_selector"))}}>{element.english_name}</div>)}
    </div>)
    return <div>
      {body}
      <AddButton school = {this.props.school}  program = {this.props.program} modalState = {this.props.modal_state} jwt = {this.props.jwt}/>
    </div>
  }
};
const mapStateToProps = state=>{
  if(!state.cac_admin_reducer.nu_departments){
    return {jwt:state.authentification.jwt,modal_state: state.cac_admin_reducer.create_nu_department,departments:[], school_in_state:state.cac_admin_reducer.nu_departments.school}
  }
  return {jwt:state.authentification.jwt,modal_state: state.cac_admin_reducer.create_nu_department,departments:state.cac_admin_reducer.nu_departments.departments, school_in_state:state.cac_admin_reducer.nu_departments.school}
}
const DepartmentSelector = connect(mapStateToProps)(department_selector)
export  {DepartmentSelector};
