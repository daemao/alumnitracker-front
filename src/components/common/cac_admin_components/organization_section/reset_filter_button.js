import React from "react";
import store from "../../../../store";
import {reset_filter} from "../../../../actions/index"
import {Button,Col} from "reactstrap"
const ResetFilter_Button = (props) =>{
  return (<Col color="danger" onClick = {resetHandler}sm="3">
  <Button block> Reset filter button
  </Button>

      </Col>
  )
}
const resetHandler = (props)=>{
  store.dispatch(reset_filter());
}
export {ResetFilter_Button}
