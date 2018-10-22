import React from "react";
import {connect} from "react-redux";
import {open_create_new_alumni_cac_admin,close_create_new_alumni_cac_admin} from "../../../../actions/index";
import store from "../../../../store";
import {Modal,ModalHeader,ModalBody,Form,Input,Label,FormGroup,ModalFooter, Button} from "reactstrap";
const add_button = props =>{
  return <div>
    <Button onClick = {(e)=>handleOpenModal(e)}>Add button</Button>
    <AddAlumniModal />
  </div>
}

const modal  = props =>{
  return (
    <Modal isOpen={props.modal_state} >
      <ModalHeader >Create new alumni</ModalHeader>
        <ModalBody>
          <Form onSubmit = {e =>{} } id="create_university_form">
            <FormGroup>
              <Label for="first_name">First name:</Label>
              <Input type="text" name="first_name" id="first_name" placeholder="Example:Yersultan" />
            </FormGroup>
            <FormGroup>
              <Label for="first_name">Second name:</Label>
              <Input type="text" name="second_name" id="second_name" placeholder="Example:Nagashtay" />
            </FormGroup>
            <FormGroup>
              <Label for="university_id">University id:</Label>
              <Input type="text" name="university_id" id="university_id" placeholder="Example:201330632" />
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
  return {jwt:state.authentification.jwt,modal_state:state.cac_admin_reducer.create_new_alumni_modal}
}
export const AddAlumniButton = connect(mapStateToProps)(add_button);
const AddAlumniModal = connect (mapStateToPropsOfModal)(modal);
