import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import store from "../../../store"
import {save_all_alumni_cac_admin} from "../../../actions/index";
import {AlumniList} from "./alumni_section/Alumni_list";
import {AddAlumniButton} from "./alumni_section/Add_alumni";
class alumni_section extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    var headers={}
    headers["x-auth"] = this.props.jwt;
    axios({
      method: 'get',
      url: "/get_all_alumni",
      headers:headers
    })
    .then(res=>{
      store.dispatch(save_all_alumni_cac_admin(res.data))
    }).catch(err=>{
    })
  }
  render(){
    return (<div>
      <h1>ALUMNI MANAGEMENT SYSTEM IS NOT FINISHED YET!</h1>
      <AddAlumniButton />
      <AlumniList/>
    </div>)
  }
}
const mapStateToProps = state => {
  return {jwt:state.authentification.jwt, all_alumni:state.cac_admin_reducer.all_alumni};
};
const AlumniSection = connect(mapStateToProps)(alumni_section);
export  {AlumniSection};
