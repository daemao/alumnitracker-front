import React from "react";
import { connect } from "react-redux";
import {Filter} from "./organization_section/";
import {Container} from "reactstrap"
const organizations = (props)=>{
  return (<Container fluid>
    <Filter/>
  </Container>)
}

const mapStateToProps = state => {
  return {jwt:state.authentification.jwt};
};
const Organizations = connect(mapStateToProps)(organizations);
export  {Organizations};
