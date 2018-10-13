import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Redirect } from 'react-router';
import {Navigation} from "../common/navigation_bar";
import {ProfileBody} from "../common/cac_main_body";
class profile extends Component {

  render() {
    console.log(this.props.user)
    if(!this.props.user.info) return <Redirect to="/" />
    switch (this.props.user.info.user_type ){
      case "alumni"           :return <Redirect to="/alumni" />
      case "school_admin"     :return <Redirect to = "/school_admin" />
      default: return (
        <div>
          <Navigation/>
          <ProfileBody />
        </div>)
    }

  }
}

const mapStateToProps = state => {
  return { user: state.authentification };
};
const Cac_admin_page = connect(mapStateToProps)(profile);
export  {Cac_admin_page};
