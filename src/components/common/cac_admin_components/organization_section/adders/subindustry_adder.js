import React from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button, FormGroup, Form, Label, Input} from "reactstrap";
import {open_new_subindustry_modal,close_new_subindustry_modal} from "../../../../../actions/index";
import store from "../../../../../store";
import {connect} from "react-redux";
import axios from "axios";
import {refresh_list} from "./actions_after_creation"
const SubindustryAddButton= props =>{
  return <div>
    <Button block onClick = {e =>{store.dispatch(open_new_subindustry_modal())}}>Add subindustry</Button>
    <NewSubIndustryAddModal/>
  </div>
}
export {SubindustryAddButton}

const add_subindustry_modal = props=>{
  var Industry_selector ;
  if(props.all_industries) Industry_selector = props.all_industries.map(elem=>{
    if(elem.id===props.default)return <option value = {elem._id} key = {elem._id} selected="selected">{elem.english_name}</option>
    else return <option value = {elem._id} key = {elem._id} >{elem.english_name}</option>
  })
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Create new subindustry</ModalHeader>
        <ModalBody>
          <Form onSubmit={e=>handle_create_subindustry(e,props.jwt)} id="create_industry_form">
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
              <Input type="select" name="industry" id="industry">
                {Industry_selector}
            </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_industry_form" >Submit</Button>
          <Button color="secondary" onClick = {e=>store.dispatch(close_new_subindustry_modal())}>Cancel</Button>
        </ModalFooter>
    </Modal>)
}
const handle_create_subindustry = (e,jwt)=>{
  e.preventDefault()
  var headers={}
  headers["x-auth"] = jwt;
  axios({
    method: 'post',
    data:{"russian_name":e.target.russian_name.value,"english_name":e.target.english_name.value,"industry":e.target.industry.value},
    url: "/cac_admin/database_manipulations/create_subindustry",
    headers:headers
  })
  .then(res=>{
    store.dispatch(close_new_subindustry_modal());
    refresh_list(headers);
  }).catch(err=>{
    console.log(err)
  })

}
const mapStateToProps = state => {
  return {jwt:state.authentification.jwt,modal_state:state.cac_admin_reducer.create_subindustry_modal, all_industries:state.cac_admin_reducer.all_industries };
};
const NewSubIndustryAddModal = connect(mapStateToProps)(add_subindustry_modal);
