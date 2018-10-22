import React from "react";
import {Label,Col,Row} from "reactstrap";
import {EditButton} from "./university_edit";
import {DepartmentsList, AddButton} from "./departments_list";
import axios from "axios"
const UniversityInformation = props =>{
    return <Col sm = "6">
      <Label>English name:</Label>{props.english_name} <br/>
      <Label>Russian name:</Label>{props.russian_name} <br/>
      <Label>Country:</Label>{props.country} <br/>
      <DepartmentsList departments = {props.departments} />
      <Row>
        <Col sm = "6" ><AddButton /></Col>
        <Col sm = "6" ><EditButton/></Col>
      </Row>
    </Col>

}
export {UniversityInformation};
