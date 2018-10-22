import React from 'react';
import {push_to_navigation_in_nu_management} from"../../../../actions/index";
import store from "../../../../store";
import {connect } from "react-redux";
import axios from "axios";

class department_selector extends React.Component{
  constructor(props){
    super(props);
    this.state = {departments:[]}
  }
  componentWillMount(){
    console.log(`Going to get ${this.props.school}`);
  }
  render(){
    return (
      <div>
        {this.state.departments.map(element =>{
          return <div onClick={e=>store.dispatch(push_to_navigation_in_nu_management(element.name+"department_selector"))}> {element.name}
          </div>
        })}
      </div>
    );
  }
};
const mapStateToProps = state=>{
  return {jwt:state.authentification.jwt}
}
const DepartmentSelector = connect(mapStateToProps)(department_selector)
export  {DepartmentSelector};
