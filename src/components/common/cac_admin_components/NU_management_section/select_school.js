import React from 'react';
import {push_to_navigation_in_nu_management} from"../../../../actions/index";
import store from "../../../../store";
import {connect } from "react-redux";
import axios from "axios";
class school_selector extends React.Component{
  constructor(props){
    super(props);
    this.state = {schools:[]}
  }
  componentWillMount(){
    console.log(`Going to get ${this.props.program}`);
    var headers = {};
    headers["x-auth"]= this.props.jwt;
    axios({
      method: 'get',
      url: `/nu_schools/get_schools_by_program/${this.props.program}`,
      headers:headers
    })
    .then(res=>{
      this.setState({schools:res.data})
    }).catch(err=>{
    })
  }
  render(){
    return (
      <div>
        {this.state.schools.map(element =>{
          return <div onClick={e=>store.dispatch(push_to_navigation_in_nu_management(element.name+"school_selector"))}> {element.name}
          </div>
        })}
      </div>
    );
  }
};
const mapStateToProps = state=>{
  return {jwt:state.authentification.jwt}
}
const SchoolSelector = connect(mapStateToProps)(school_selector)
export  {SchoolSelector};
