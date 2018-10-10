import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Redirect } from 'react-router';
class profile extends Component {

  render() {
    if(!this.props.user) return <Redirect to="/" />
    switch (this.props.user.info.user_type ){
      case "cac_admin"        :return <Redirect to = "/cac_admin" />
      case "school_admin"     :return <Redirect to = "/school_admin" />
      default                 :return <div>Alumni profile page</div>
    }
  }
}

const mapStateToProps = state => {
  return { user: state.personal_info };
};
const Alumni_page = connect(mapStateToProps)(profile);
export  {Alumni_page};
