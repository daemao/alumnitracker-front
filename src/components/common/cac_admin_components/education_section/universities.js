import React from "react";
import { connect } from "react-redux";
import axios from "axios"
import {save_available_universities,select_university} from "../../../../actions/index";
import {UniversityInformation} from "./university_information"
import {AddUniversityButton} from "./new_university_modal";
import store from "../../../../store";
import {Row,Col,Label} from "reactstrap"
class universities_container extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    var headers={}
    headers["x-auth"] = this.props.jwt;
    axios({
      method: 'get',
      url: "/universities/get_all",
      headers:headers
    }).then(res=>{
      store.dispatch(save_available_universities(res.data))
    }).catch(err=>{
      console.log("=>err",err)
    })
  }
  render(){
    if(!this.props.universities) return null;
    else {
      var UniversitiesList = this.props.universities.map(element=><UniversityContainer {...element}/>)
      var SelectedUniversity ;
      if(this.props.selected_university)SelectedUniversity = <UniversityInformation  {...this.props.selected_university  }/>
      else SelectedUniversity = null;
      return <Col>
        <ul>
          {UniversitiesList}
        </ul>
        <AddUniversityButton/>
          {SelectedUniversity }
      </Col>
    }
  }
}

const UniversityContainer = props =>{
  return <div onClick = {(e)=>{store.dispatch(select_university(props))}}>
    <Label>English name:</Label>{props.english_name} <br/>
  </div>
}
const mapStateToProps = state => {
  return {jwt:state.authentification.jwt,universities:state.cac_admin_reducer.all_universities,selected_university:state.cac_admin_reducer.selected_university};
};
const UniversitiesContainer = connect(mapStateToProps)(universities_container);
export {UniversitiesContainer}
