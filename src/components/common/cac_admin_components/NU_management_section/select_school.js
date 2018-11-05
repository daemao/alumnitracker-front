import React from 'react';
import {push_to_navigation_in_nu_management,save_available_schools} from"../../../../actions/index";
import store from "../../../../store";
import {connect } from "react-redux";
import {AddButton} from "./create_new_school"
import {get_schools_by_program} from "./API_calls";
class school_selector extends React.Component{
  constructor(props){
    super(props);
    get_schools_by_program(this.props.program,this.props.jwt,(err,res)=>{
      if(!err){
        store.dispatch(save_available_schools(res.data, this.props.program));
      }
      else console.log(err);
    })
  }
  render(){
    if(!this.props.program)return <div>THere is no program defined</div>
    if(this.props.program === "masters"){
      if(!this.props.masters_schools) return <div><AddButton program = {this.props.program} jwt = {this.props.jwt}  modalState = {this.props.modal_state}/></div>
      return (
        <div>
          {this.props.masters_schools.map(element =>{
            return <SchoolInList key = {element._id} {...element}/>
          })}
          <AddButton program = {this.props.program} jwt = {this.props.jwt}  modalState = {this.props.modal_state}/>
        </div>
      )
    }else{
      if(!this.props.bachelor_schools) return <div><AddButton program = {this.props.program} jwt = {this.props.jwt}  modalState = {this.props.modal_state}/></div>
      return (
        <div>
          {this.props.bachelor_schools.map(element =>{
            return <SchoolInList key = {element._id} {...element}/>
          })}
          <AddButton program = {this.props.program} jwt = {this.props.jwt}  modalState = {this.props.modal_state}/>
        </div>
      )
    }
  }
};
const SchoolInList = props =>{
  return <div onClick={e=>store.dispatch(push_to_navigation_in_nu_management(props.name+"school_selector"))}> {props.name}</div>
}
const mapStateToProps = state=>{
  return {jwt:state.authentification.jwt,modal_state:state.cac_admin_reducer.create_new_school_modal,bachelor_schools:state.cac_admin_reducer.bachelor_schools, masters_schools:state.cac_admin_reducer.masters_schools}
}
const SchoolSelector = connect(mapStateToProps)(school_selector)
export  {SchoolSelector};
