import React from "react";
import {Button, Modal, ModalHeader,ModalBody,Label,FormGroup,Form,Input,ModalFooter} from "reactstrap";
import { connect } from "react-redux";
import store from "../../../../store";
import {open_create_new_university_modal, close_crete_new_university_modal,save_available_universities} from "../../../../actions/index";
import axios from "axios"
const AddUniversityButton = props=>{
  return <div>
    <Button  onClick = {(e)=>{handleOpenModal(e)}}block>Add university</Button>
    <NewUniversityModal />
  </div>
}
export {AddUniversityButton};

const modal = props =>{
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Create new university</ModalHeader>
        <ModalBody>
          <Form onSubmit = {e =>{handleFormSubmit(e,props.jwt)} } id="create_university_form">
            <FormGroup>
              <Label for="english_name">English name:</Label>
              <Input type="text" name="english_name" id="english_name" placeholder="Example:Nazarbayev University" />
            </FormGroup>
            <FormGroup>
              <Label for="russian_name">Russian name:</Label>
              <Input type="text" name="russian_name" id="russian_name" placeholder="Example: Назарбаев университет" />
            </FormGroup>
            <FormGroup>
              <Label for="country">Country:</Label>
              <Input type="text" name="country" id="country" placeholder="Example: Kazakhstan" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_university_form" >Submit</Button>
          <Button color="secondary" onClick = {e => {handleCloseModal(e)} }>Cancel</Button>
        </ModalFooter>
    </Modal>)
}

const handleOpenModal = e=>{
  e.preventDefault();
  store.dispatch(open_create_new_university_modal());
}
const handleCloseModal = e=>{
  e.preventDefault();
  store.dispatch(close_crete_new_university_modal());
}
const handleFormSubmit = (e,jwt) =>{
  e.preventDefault();
  var headers={}
  headers["x-auth"] = jwt;
  axios({
    method: 'post',
    data:{"russian_name":e.target.russian_name.value,"english_name":e.target.english_name.value,"country":e.target.country.value},
    url: "/cac_admin/database_manipulations/create_university",
    headers:headers
  })
  .then(res=>{
    store.dispatch(close_crete_new_university_modal());
    axios({
      method: 'get',
      url: "/universities/get_all",
      headers:headers
    }).then(res=>{
      store.dispatch(save_available_universities(res.data))
    }).catch(err=>{
      console.log("=>err",err)
    })
  }).catch(err=>{
    console.log(err)
  })
}

const mapStateToProps = state=>{
  return {jwt:state.authentification.jwt, modal_state:state.cac_admin_reducer.create_university_modal};
}
const NewUniversityModal = connect(mapStateToProps)(modal);
