import React from "react";
import {open_create_new_department_in_nu_management,close_create_new_department_in_nu_management,save_available_departments} from"../../../../actions/index";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button, FormGroup, Form, Label, Input} from "reactstrap"
import store from "../../../../store";
import axios from "axios";
import {get_departments_by_school_and_program} from "./API_calls"
export const AddButton = props =>{
  return (
    <div>
      <div onClick = {e=>hanlde_open_modal(e,props.jwt,props.school,props.modalState)}>add new department for {props.school}</div>
      <AddModal modal_state = {props.modalState} school ={props.school} program = {props.program} jwt = {props.jwt}/>
    </div>
  )
}
const hanlde_open_modal = (e,jwt,program,state) =>{
  e.preventDefault();
  store.dispatch(open_create_new_department_in_nu_management(program));
}

const AddModal = props=>{
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Create new department for {props.school}</ModalHeader>
        <ModalBody>
          <Form onSubmit = {e =>{create_new_deparment(e,props.school,props.program,props.jwt)}} id="create_department_for_school">
            <FormGroup>
              <Label for="english_name">English name:</Label>
              <Input type="text" name="english_name" id="english_name" placeholder="Example:Computer Science" />
            </FormGroup>
            <FormGroup>
              <Label for="russian_name">Russian name:</Label>
              <Input type="text" name="russian_name" id="russian_name" placeholder="Пример:Вычеслительные приборы" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_department_for_school" >Submit</Button>
          <Button color="secondary" onClick = {e=>{handle_close_modal(e,props.school,props.jwt)}}>Cancel</Button>
        </ModalFooter>
    </Modal>)
}
const create_new_deparment = (e,school,program, jwt)=>{
  e.preventDefault();
  var headers={}
  headers["x-auth"] = jwt;
  axios({
    method: 'post',
    data:{"english_name":e.target.english_name.value,"russian_name":e.target.russian_name.value},
    url: `/cac_admin/database_manipulations/create_nu_department_by_schoolname_and_program/${program}/${school}`,
    headers:headers
  })
  .then(res=>{
    store.dispatch(close_create_new_department_in_nu_management());
    get_departments_by_school_and_program(school,program,jwt,(err,res)=>{
      console.log("err:",err);
      console.log("DATA:",res.data);
      if(!err)store.dispatch(save_available_departments(res.data.departments, school));
      else console.log(err);
    });
  }).catch(err=>{
    console.log(err)
  })
}
const handle_close_modal = (e, school)=>{
  e.preventDefault();
  store.dispatch(close_create_new_department_in_nu_management(school));
}
