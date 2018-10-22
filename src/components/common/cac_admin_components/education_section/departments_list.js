import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import store from "../../../../store";
import {close_add_new_department_modal,open_add_new_department_modal,save_available_universities,select_university} from "../../../../actions/index"
import {Button,Modal,ModalBody,ModalFooter,ModalHeader,Input,Label,Form, FormGroup} from "reactstrap"
const department_list = props =>{
  return (<div>Departments list
    <ul>
        {props.departments.map((element =><li key = {element._id}>{element.name}</li>))}
    </ul>
    <NewDeparmentModal/>
  </div>)
}
const mapStateToProps = state=>{
  return {jwt:state.authentification.jwt, university:state.cac_admin_reducer.selected_university,departments:state.cac_admin_reducer.selected_university.departments}
}
const DepartmentsList  =connect(mapStateToProps)(department_list)


const AddButton = props =>{
  return <Button onClick = {e=>{handleOpenModal(e)}}>Add new department</Button>
}
const handleOpenModal = e=>{
  e.preventDefault();
  store.dispatch(open_add_new_department_modal());
}
const handleCloseModal = e=>{
  e.preventDefault();
  store.dispatch(close_add_new_department_modal());
}
export {DepartmentsList,AddButton}
const modal = props =>{
  return (<Modal isOpen={props.modal_state} >
    <ModalHeader >Create new department in {props.university.english_name}</ModalHeader>
      <ModalBody>
        <Form onSubmit = {e =>{handleSubmitForm(e,props.jwt,props.university._id)} } id="create_department_form">
          <FormGroup>
            <Label for="name">English name:</Label>
            <Input type="text" name="name" id="name" placeholder="Example:Computer Science" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit"  form="create_department_form" >Submit</Button>
        <Button color="secondary" onClick = {e => {handleCloseModal(e)} }>Cancel</Button>
      </ModalFooter>
  </Modal>)
}
const handleSubmitForm = (e,jwt,university) =>{
  e.preventDefault();
  var headers={}
  headers["x-auth"] = jwt;
  axios({
    method: 'post',
    data:{"name":e.target.name.value,"university":university},
    url: "/cac_admin/database_manipulations/create_department",
    headers:headers
  })
  .then(res=>{
    store.dispatch(close_add_new_department_modal());
    axios({
      method: 'get',
      url: "/universities/get_all",
      headers:headers
    }).then(res=>{
      store.dispatch(save_available_universities(res.data));
      store.dispatch(select_university(undefined))
    }).catch(err=>{
      console.log("=>err",err)
    })
  }).catch(err=>{
    console.log(err)
  })
}
const mapStateToPropsOfModal = state=>{
  return {jwt:state.authentification.jwt, university:state.cac_admin_reducer.selected_university,modal_state:state.cac_admin_reducer.add_new_department_modal}
}
const NewDeparmentModal = connect(mapStateToPropsOfModal)(modal)
