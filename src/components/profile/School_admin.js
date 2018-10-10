import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Redirect } from 'react-router';
class profile extends Component {
  render() {
    if(!this.props.user) return <Redirect to="/" />
    switch (this.props.user.info.user_type ){
      case "alumni"           :return <Redirect to="/alumni" />
      case "cac_admin"        :return <Redirect to = "/cac_admin" />
      default: return <div>School admin profile page</div>
    }
  }
}

const mapStateToProps = state => {
  return { user: state.personal_info };
};
const School_admin_page = connect(mapStateToProps)(profile);
export  {School_admin_page};
