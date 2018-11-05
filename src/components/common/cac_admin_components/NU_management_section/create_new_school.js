import React from "react";
import {open_create_new_school_in_nu_management,close_create_new_school_in_nu_management,save_available_schools} from"../../../../actions/index";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button, FormGroup, Form, Label, Input} from "reactstrap"
import store from "../../../../store";
import axios from "axios";
import {get_schools_by_program} from "./API_calls"
export const AddButton = props =>{
  return (
    <div>
      <div onClick = {e=>hanlde_open_modal(e,props.jwt,props.program,props.modalState)}>add new school for {props.program}</div>
      <AddModal modal_state = {props.modalState} program ={props.program} jwt = {props.jwt}/>
    </div>
  )
}
const hanlde_open_modal = (e,jwt,program,state) =>{
  e.preventDefault();
  store.dispatch(open_create_new_school_in_nu_management(program));
}

const AddModal = props=>{
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Create new school for {props.program}</ModalHeader>
        <ModalBody>
          <Form onSubmit = {e =>{create_new_school(e,props.program,props.jwt)}} id="create_school_for_program_form">
            <FormGroup>
              <Label for="name">English name:</Label>
              <Input type="text" name="name" id="name" placeholder="Example:SST" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_school_for_program_form" >Submit</Button>
          <Button color="secondary" onClick = {e=>{handle_close_modal(e,props.program,props.jwt)}}>Cancel</Button>
        </ModalFooter>
    </Modal>)
}
const create_new_school = (e,program, jwt)=>{
  e.preventDefault();
  var headers={}
  headers["x-auth"] = jwt;
  axios({
    method: 'post',
    data:{"school_name":e.target.name.value,"program":program},
    url: "/cac_admin/database_manipulations/create_nu_school",
    headers:headers
  })
  .then(res=>{
    store.dispatch(close_create_new_school_in_nu_management());
    get_schools_by_program(program,jwt,(err,res)=>{
      if(!err)store.dispatch(save_available_schools(res.data, program));
      else console.log(err);
    });
  }).catch(err=>{
    console.log(err)
  })
}
const handle_close_modal = (e, program)=>{
  e.preventDefault();
  store.dispatch(close_create_new_school_in_nu_management(program));
}
