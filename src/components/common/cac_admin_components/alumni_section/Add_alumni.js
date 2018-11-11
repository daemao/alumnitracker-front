import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {save_all_alumni_cac_admin,open_create_new_alumni_cac_admin,close_create_new_alumni_cac_admin, save_available_schools,save_available_departments_in_create_alumni} from "../../../../actions/index";
import store from "../../../../store";
import {get_schools_by_program} from "../NU_management_section/API_calls"
import {Modal,ModalHeader,ModalBody,Form,Input,Label,FormGroup,ModalFooter, Button,Row} from "reactstrap";
const add_button = props =>{
  return <div>
    <Button onClick = {(e)=>handleOpenModal(e)}>Create new alumni</Button>
    <AddAlumniModal />
  </div>
}

const modal  = props =>{
  var schoolList;
  if(props.bachelor_schools===null)schoolList = props.masters_schools;
  else schoolList = props.bachelor_schools;
  return (
    <Modal isOpen={props.modal_state} onSubmit = {e=>handleFormSubmit(e,props.jwt)}>
      <ModalHeader >Create new alumni</ModalHeader>
        <ModalBody>
          <Form onSubmit = {e =>{} } id="create_university_form">
            <FormGroup>
              <Label for="first_name">First name:</Label>
              <Input type="text" name="first_name" id="first_name" placeholder="Example:Yersultan" />
            </FormGroup>
            <FormGroup>
              <Label for="second_name">Second name:</Label>
              <Input type="text" name="second_name" id="second_name" placeholder="Example:Nagashtay" />
            </FormGroup>
            <FormGroup>
              <Label for="id">University id:</Label>
              <Input type="text" name="id" id="id" placeholder="Example:201330632" />
            </FormGroup>
            <FormGroup>
              <Label for="id">Email:</Label>
              <Input type="email" name="email" id="email" placeholder="Example:yersultan.nagashtay@nu.edu.kz" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_university_form" >Submit</Button>
          <Button color="secondary" onClick = {e => {handleCloseModal(e)} }>Cancel</Button>
        </ModalFooter>
    </Modal>
  )
}

const handleFormSubmit = (e,token)=>{
  e.preventDefault();
  var headers = {};
  headers["x-auth"]= token;
  axios({
    method: 'post',
    url: `cac_admin/alumni_manipulations/create_alumni`,
    headers:headers,
    data:{
      "name":e.target.first_name.value,
      "surename":e.target.second_name.value,
      "id":e.target.id.value,
      "email":e.target.email.value,
    }
  })
  .then(res=>{
    var headers={}
    headers["x-auth"] = token;
    axios({
      method: 'get',
      url: "/get_all_alumni",
      headers:headers
    })
    .then(res=>{
      store.dispatch(save_all_alumni_cac_admin(res.data))
    }).catch(err=>{
    });
    handleCloseModal(e);
  }).catch(err=>{
    handleCloseModal(e);
  })
}
const handleCloseModal = e =>{
  e.preventDefault();
  store.dispatch(close_create_new_alumni_cac_admin())
}
const handleOpenModal = e =>{
  e.preventDefault();
  store.dispatch(open_create_new_alumni_cac_admin())
}
const mapStateToProps = state =>{
  return {jwt:state.authentification.jwt}
}
const mapStateToPropsOfModal = state=>{
  return {jwt:state.authentification.jwt,departments:state.cac_admin_reducer.selected_departments_in_create_alumni,modal_state:state.cac_admin_reducer.create_new_alumni_modal,bachelor_schools:state.cac_admin_reducer.bachelor_schools,masters_schools:state.cac_admin_reducer.masters_schools}
}
export const AddAlumniButton = connect(mapStateToProps)(add_button);
const AddAlumniModal = connect (mapStateToPropsOfModal)(modal);
