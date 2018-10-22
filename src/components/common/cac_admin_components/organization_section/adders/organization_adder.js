import React from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button, FormGroup, Form, Label, Input} from "reactstrap"
import store from "../../../../../store";
import { connect } from "react-redux";
import {open_create_new_organization_modal,close_create_new_organization_modal} from "../../../../../actions/index"
import {refresh_list} from "./actions_after_creation"
import axios from "axios";

const OrganizationAdder=(props)=>{
  return (<div onClick = {(e)=>{}}>
      <Button block color="primary" onClick = { e =>store.dispatch(open_create_new_organization_modal())}>Add Organization</Button>
      <NewOrganizationAddModal default = {props.selected}/>
    </div>)
}
export {OrganizationAdder};

const add_organization_modal = props=> {
  var Industry_selector;
  console.log(props)
  if(props.all_subindustries) Industry_selector = props.all_subindustries.map(elem=>{
    if(props.default ===elem._id)return <option value = {elem._id} key = {elem._id} selected="selected">{elem.english_name}</option>
    else return <option value = {elem._id} key = {elem._id}>{elem.english_name}</option>
  })
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Create new organization</ModalHeader>
        <ModalBody>
          <Form onSubmit = {e => handle_create_organization(e,props.jwt)} id="create_industry_form">
            <FormGroup>
              <Label for="english_name">English name:</Label>
              <Input type="text" name="english_name" id="english_name" placeholder="Example:Manufacturing and production" />
            </FormGroup>
            <FormGroup>
              <Label for="russian_name">Russian name:</Label>
              <Input type="text" name="russian_name" id="russian_name" placeholder="Example: Производство" />
            </FormGroup>
            <FormGroup>
              <Label for="russian_name">Industry to belong:</Label>
              <Input type="select" name="subindustry" id="subindustry">
                {Industry_selector}
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_industry_form" >Submit</Button>
          <Button color="secondary" onClick = {e=>{store.dispatch (close_create_new_organization_modal())}}>Cancel</Button>
        </ModalFooter>
    </Modal>)
}
const handle_create_organization = (e,jwt)=>{
  e.preventDefault();
  var headers={}
  headers["x-auth"] = jwt;
  axios({
    method: 'post',
    data:{"russian_name":e.target.russian_name.value,"english_name":e.target.english_name.value,"subindustry":e.target.subindustry.value},
    url: "/cac_admin/database_manipulations/create_company",
    headers:headers
  })
  .then(res=>{
    store.dispatch(close_create_new_organization_modal());
    refresh_list(headers);
  }).catch(err=>{
    console.log(err)
  })

}
const mapStateToProps = state => {
  return {jwt:state.authentification.jwt,modal_state:state.cac_admin_reducer.create_organization_modal,all_subindustries:state.cac_admin_reducer.all_subindustries };
};
const NewOrganizationAddModal = connect(mapStateToProps)(add_organization_modal);
