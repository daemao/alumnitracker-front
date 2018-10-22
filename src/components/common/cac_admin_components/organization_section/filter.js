import React from "react";
import {IndustryFilter} from "./industry_filter";
import {SubindustryFilter} from "./subindustry_filter";
import {ResetFilter_Button as ResetFilterButton} from "./reset_filter_button";
import {save_available_industries,save_available_subindustries, save_available_organizations} from "../../../../actions/index"
import axios from "axios";
import store from "../../../../store";
import { connect } from "react-redux";
import {Information_section as InformationSection} from './information_section';
import {OrganizationsFilter} from "./organizations_filter"
import {Row} from "reactstrap"

class filter extends React.Component{
  componentWillMount(){
    var headers={}
    headers["x-auth"] = this.props.jwt;
    axios({
      method: 'get',
      url: "/industries/get_all",
      headers:headers
    })
    .then(res=>{
      res.data.forEach(e=>e.selected=true)
      store.dispatch(save_available_industries(res.data));
    }).catch(err=>{
      console.log(err)
    })
    axios({
      method:"get",
      url:"/subindustries/get_all",
      headers:headers
    })
    .then(res=>{
      var organizations=[];
      res.data.forEach(e=>{
        e.selected=true;
        e.organizations.forEach(org=>{
          org.selected=true;
          organizations.push(org);
        })
      })
      store.dispatch(save_available_subindustries(res.data));
      store.dispatch(save_available_organizations(organizations));
    }).catch(err=>{
      console.log("=>err",err)
    })
  }
  render(){
    if(this.props.all_organizations === undefined || this.props.all_industries === null) return <div>Loading</div>
  return (<div>
      <Row>
        <IndustryFilter industries={this.props.all_industries}/>
        <SubindustryFilter  subindustries={this.props.all_subindustries}/>
        <OrganizationsFilter organizations={this.props.all_organizations}/>
        <InformationSection />
        <ResetFilterButton />
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {jwt:state.authentification.jwt, all_industries:state.cac_admin_reducer.all_industries,all_subindustries:state.cac_admin_reducer.all_subindustries,all_organizations:state.cac_admin_reducer.all_organizations,selected:state.cac_admin_reducer.filter_selected_info };
};
const Filter = connect(mapStateToProps)(filter);
export {Filter}
