import React from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button, FormGroup, Form, Label, Input} from "reactstrap"
import store from "../../../../../store";
import { connect } from "react-redux";
import {open_new_industry_modal,
  close_new_industry_modal
} from "../../../../../actions/index"
import {refresh_list} from "./actions_after_creation"
import axios from "axios";
const IndustryAdder=(props)=>{
  return (<div onClick = {(e)=>{handle_industry_adder_clicked(e)}}>
      <Button block color="primary">Add industry</Button>
      <NewIndustryAddModal/>
    </div>)
}
const handle_industry_adder_clicked=e=>{
  e.preventDefault();
  store.dispatch(open_new_industry_modal());
}
const handle_industry_adder_close = e =>{
  e.preventDefault();
  store.dispatch(close_new_industry_modal());
}
const add_industry_modal = props=>{
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Create new industry</ModalHeader>
        <ModalBody>
          <Form onSubmit = {e => handle_create_industry(e,props.jwt)} id="create_industry_form">
            <FormGroup>
              <Label for="english_name">English name:</Label>
              <Input type="text" name="english_name" id="english_name" placeholder="Example:Manufacturing and production" />
            </FormGroup>
            <FormGroup>
              <Label for="russian_name">Russian name:</Label>
              <Input type="text" name="russian_name" id="russian_name" placeholder="Example: Производство" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_industry_form" >Submit</Button>
          <Button color="secondary" onClick = {e=>{handle_industry_adder_close(e)}}>Cancel</Button>
        </ModalFooter>
    </Modal>)
}
const handle_create_industry = (e,jwt) =>{
  e.preventDefault();
  var headers={}
  headers["x-auth"] = jwt;
  axios({
    method: 'post',
    data:{"russian_name":e.target.russian_name.value,"english_name":e.target.english_name.value},
    url: "/cac_admin/database_manipulations/create_industry",
    headers:headers
  })
  .then(res=>{
    store.dispatch(close_new_industry_modal());
    refresh_list(headers);
  }).catch(err=>{
    console.log(err)
  })
}
const mapStateToProps = state => {
  return {jwt:state.authentification.jwt,modal_state:state.cac_admin_reducer.create_industry_modal };
};
const NewIndustryAddModal = connect(mapStateToProps)(add_industry_modal);
export {IndustryAdder}
