import React from "react";
import store from "../../../../store";
import {remove_industry_from_filter,
        add_industry_to_filter,
        select_in_filter
      } from '../../../../actions/index'
import { ListGroup, ListGroupItem,Col,Button } from 'reactstrap';
import styles from "./style.css"
import {NameContainer} from "./filter_names_container"
import {IndustryAdder} from "./adders/industry_adder";
//Filter for industries design and architecture
const IndustryFilter = (props)=>{
  var IndustryList ;
  if(props.industries !== undefined) IndustryList = props.industries.map((elem,index)=><Industry key={elem._id} {...elem} index={index}/>);
  else IndustryList = null
  return (<Col sm="3">
      Industries list:
      <ListGroup >
        {IndustryList}
      </ListGroup>
    <IndustryAdder/>
  </Col>)
}
const click = (props)=>{
  store.dispatch(select_in_filter(props))
}

//industries design and architecture
const Industry = (props)=>{
  return(
    <ListGroupItem onClick={(e)=>click(props)}>
      <NameContainer name={props.english_name} />
      <Button className={styles.filter_select_buttons_near_name}  color={props.selected?"success":"danger"} onClick ={()=>IndustryClick(props.index,props.selected)}></Button>
    </ListGroupItem>
  )
}
const IndustryClick = (index,selected)=>{
  if(selected){
    store.dispatch(remove_industry_from_filter(index))
  }else{
    store.dispatch(add_industry_to_filter(index))
  }
}
export  {IndustryFilter};
