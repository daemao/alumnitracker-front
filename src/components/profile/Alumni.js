import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Redirect } from 'react-router';
import {Navigation} from "../common/navigation_bar"
import {ProfileBody} from "../common/alumni_components/main_components";
class profile extends Component {
  render() {
    if(!this.props.user) return <Redirect to="/" />
    if(!this.props.user.info) return <Redirect to="/" />
    switch (this.props.user.info.user_type ){
      case "cac_admin"        :return <Redirect to = "/cac_admin" />
      case "school_admin"     :return <Redirect to = "/school_admin" />
      default                 :return ( // all the things that related to alumni =)
        <div><Navigation {...this.props.user.info}/><ProfileBody/></div>

      )
    }
  }
}

const mapStateToProps = state => {
  return { user: state.authentification };
};
const Alumni_page = connect(mapStateToProps)(profile);
export  {Alumni_page};
