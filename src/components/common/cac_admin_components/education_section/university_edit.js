import React from "react";
import {Button,ModalBody,ModalHeader,ModalFooter,Modal,Form,FormGroup,Input,Label} from "reactstrap";
import {open_edit_university_modal,close_edit_university_modal} from "../../../../actions/index";
import store from "../../../../store";
import {connect} from "react-redux"

const EditButton = props=>{
  return <div>
    <Button onClick = {e=>handleEditButtonClicked(e)}>Edit button</Button>
    <EditModal/>
  </div>
}
const modal  = props =>{
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Change existing university</ModalHeader>
        <ModalBody>
        <Form onSubmit = {e=>{} } id="create_university_form">
          <FormGroup>
            <Label for="english_name">English name:</Label>
            <Input type="text" name="english_name" id="english_name" placeholder={props.university.english_name}/>
          </FormGroup>
          <FormGroup>
            <Label for="russian_name">Russian name:</Label>
            <Input type="text" name="russian_name" id="russian_name" placeholder={props.university.russian_name} />
          </FormGroup>
          <FormGroup>
            <Label for="country">Country:</Label>
            <Input type="text" name="country" id="country" placeholder={props.university.country} />
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit"  form="create_university_form" >Submit</Button>
          <Button color="secondary" onClick = {e => {handleCloseModal(e)} }>Cancel</Button>
        </ModalFooter>
    </Modal>)
}
const mapStateToProps= state=>{
  return {jwt:state.authentification.jwt,modal_state:state.cac_admin_reducer.edit_university_modal,university:state.cac_admin_reducer.selected_university};
}
const EditModal = connect(mapStateToProps)(modal)
const handleEditButtonClicked = e=>{
  e.preventDefault();
  store.dispatch(open_edit_university_modal());
}
const handleCloseModal = e =>{
  e.preventDefault();
  store.dispatch(close_edit_university_modal());
}
export {EditButton};
