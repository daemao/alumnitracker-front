import React from "react";
import {Col} from "reactstrap";
import {connect} from "react-redux"
import {SubindustryAddButton} from './adders/subindustry_adder'
import {OrganizationAdder} from "./adders/organization_adder"
const information_section = (props)=>{
  var body;
  var industry;
  if(!props.selected) body=null;
  else if(props.selected.subindustries!== undefined){
    body=<IndustryInformation  {...props.selected} allIndustries={props.all_subindustries}/>
  }else if(props.selected.organizations !==undefined){
    props.all_industries.forEach(ind=>{
      if(ind._id === props.selected.industry) return industry=ind;
    })
    body = <SubIndustryInformation {...props.selected} allOrganizations={props.all_organizations} industry={industry}/>
  }else if(props.selected.subindustry !==undefined){
    var subindustry;
    props.all_subindustries.forEach(ind=>{
      if(ind._id === props.selected.subindustry) {
        props.all_industries.forEach(ind2=>{
          if(ind2._id === ind.industry) industry=ind2;
        })
        return subindustry=ind;
      }
    })
    body = <OrganizationInformation {...props.selected} SubIndustry = {subindustry} Industry = {industry}/>
  }
  return <Col sm="3">Information section {body}</Col>
}
const mapStateToProps = state => {
  return { all_industries:state.cac_admin_reducer.all_industries,all_subindustries:state.cac_admin_reducer.all_subindustries,all_organizations:state.cac_admin_reducer.all_organizations,selected:state.cac_admin_reducer.filter_selected_info };
};
const Information_section = connect(mapStateToProps)(information_section);
export {Information_section}

const SubIndustryInformation = props=>{

  var organizations = [];
  if(props.allOrganizations)props.allOrganizations.forEach(org=>{
    if(org.subindustry === props._id)organizations.push(org);
  })
  var Organizations=organizations.map(element=><li>{element.english_name}</li>)
  return(
    <div>
      <center>
      <h4>Sub-industry information</h4>
      </center>
      <label>English name:</label>{props.english_name}<br/>
      <label>Russian name:</label>{props.russian_name}<br/>
      <label>Organizations number:</label>{props.organizations.length}<br/>
      <label>Organizations:</label><br/>
      <ul>{Organizations}</ul>
      <OrganizationAdder selected ={props._id}/>
    </div>
  )
}
const IndustryInformation = (props)=>{
  var subindustries = [];
  if(props.allIndustries)props.allIndustries.forEach(sub=>{
    if(sub.industry === props._id)subindustries.push(sub);
  })
  var Subindustries=subindustries.map(element=><li key={element._id}>{element.english_name}</li>)
  return(
    <div>
      <center>
      <h4>Industry information</h4>
      </center>
      <label>English name:</label>{props.english_name}<br/>
      <label>Russian name:</label>{props.russian_name}<br/>
      <label>Subindustries number:</label>{props.subindustries.length}<br/>
      <label>Subindustries:</label><br/>
      <ul>{Subindustries}</ul>
      <SubindustryAddButton  selected ={props._id}/>
    </div>
  )
}
const OrganizationInformation = props=>{
  return (
    <div>
      <center>
      <h4>Organization information</h4>
      </center>
      <label>English name:</label>{props.english_name}<br/>
      <label>Russian name:</label>{props.russian_name}<br/>
      <label>Subindustry:</label>{props.SubIndustry.english_name}<br/>
      <label>Industry:</label>{props.Industry.english_name}
    </div>
  )
}
