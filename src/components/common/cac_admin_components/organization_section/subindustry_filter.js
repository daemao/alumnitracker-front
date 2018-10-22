import React from "react";
import store from "../../../../store";
import style from "./style.css"
import {NameContainer} from "./filter_names_container"
import { ListGroup, ListGroupItem,Col,Button } from 'reactstrap';
import {remove_subindustry_from_filter,
        select_in_filter,
        add_subindustry_to_filter} from '../../../../actions/index'
const SubindustryFilter = (props)=>{
  var IndustryList =[];
  if (props.subindustries !== undefined) props.subindustries.forEach((element)=>{
      IndustryList.push(element);
  });
  var IndustryListHTML  = IndustryList.map((element)=><SubIndustry {...element}/>)
  return (<Col sm='3'>
      Industries list:
      <ListGroup >
        {IndustryListHTML}
      </ListGroup>
  </Col>)
};

const SubIndustry = (props)=>{
  if(props.selected===false)return null
  return <ListGroupItem  onClick = {e=>click(props)}>
    <NameContainer name={props.english_name}/>
      <Button
            className={style.filter_select_buttons_near_name}
            color={props.selected? "success":"danger"}
            onClick ={()=>SubIndustryClick(props._id,props.selected)}/>
  </ListGroupItem>
}

const click = (props)=>{
  store.dispatch(select_in_filter(props))
}
const SubIndustryClick = (index,selected)=>{
  if(selected){
    store.dispatch(remove_subindustry_from_filter(index))
  }else{
    store.dispatch(add_subindustry_to_filter(index))
  }
}
export {SubindustryFilter}
