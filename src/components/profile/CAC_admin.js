import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Redirect } from 'react-router';
class profile extends Component {
  render() {
    if(!this.props.user) return <Redirect to="/" />
    switch (this.props.user.info.user_type ){
      case "alumni"           :return <Redirect to="/alumni" />
      case "school_admin"     :return <Redirect to = "/school_admin" />
      default: return <div>Cac admin page</div>
    }

  }
}

const mapStateToProps = state => {
  return { user: state.personal_info };
};
const Cac_admin_page = connect(mapStateToProps)(profile);
export  {Cac_admin_page};
