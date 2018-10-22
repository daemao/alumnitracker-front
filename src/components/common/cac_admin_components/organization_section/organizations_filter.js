import React from "react";
import store from "../../../../store";
import style from "./style.css"
import { ListGroup, ListGroupItem,Col,Button } from 'reactstrap';
import {add_to_organizations_filter,
        select_in_filter,
        remove_from_organizations_filter} from '../../../../actions/index'
import {NameContainer} from "./filter_names_container"
//design

const OrganizationsFilter = (props)=>{
  if(props.organizations)var IndustryListHTML  = props.organizations.map((element)=>{
    if(element.selected===false)return null
    return <ListGroupItem key={element._id} onClick={(e)=>click(element)}>
      <NameContainer name={element.english_name}/>
      <Button className={style.filter_select_buttons_near_name}
              color={element.selected? "success":"danger"}
              onClick={(e)=>SubIndustryClick(element._id,element.selected)}
              />
    </ListGroupItem>
  })
  else IndustryListHTML = null
  return <Col sm="3">
    Organizations:
    <ListGroup>
      {IndustryListHTML}
      </ListGroup>
      </Col>
}

const click = (props)=>{
  store.dispatch(select_in_filter(props))
}
const SubIndustryClick = (index,selected)=>{
  if(selected){
    store.dispatch(add_to_organizations_filter(index))
  }else{
    store.dispatch(remove_from_organizations_filter(index))
  }
}

export {OrganizationsFilter}
