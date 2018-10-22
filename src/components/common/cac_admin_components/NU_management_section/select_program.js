import React from 'react';
import {push_to_navigation_in_nu_management} from"../../../../actions/index";
import store from "../../../../store";
import {connect} from "react-redux";

const ProgramSelector = props=>{
    return (
      <div>
        <div onClick={e=>store.dispatch(push_to_navigation_in_nu_management("masters"))}> Masters
        </div>
        <div onClick={e=>store.dispatch(push_to_navigation_in_nu_management("bachelor"))}> Bachelor
        </div>
      </div>
    );
  }

export  {ProgramSelector};
