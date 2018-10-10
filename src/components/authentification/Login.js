import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import store from "../../store";
import {login} from "../../actions"
import {  Redirect } from 'react-router';
import JWT from 'jsonwebtoken';
class Login extends Component {
  render() {
    if (!this.props.user)return (
      <div className="App">
        <p> Login</p>
        <form onSubmit={this.submit_form_handler.bind(this)}>
        <input type = "text"     name="email"    placeholder="email" />
        <input type = "password" name="password" placeholder="password" />
        <button value = "submit" type="submit">Log in</button>
        </form>
      </div>
    );
    switch (this.props.user.info.user_type ){
      case "alumni"           :return <Redirect to="/alumni" />
      case "cac_admin"        :return <Redirect to = "/cac_admin" />
      case "school_admin"     :return <Redirect to = "/school_admin" />
      default: return <div>this.props.user</div>
    }

  }
  submit_form_handler(e){
    e.preventDefault();
    var formData  = {
      "email":e.target.email.value,"password":e.target.password.value
    }
    axios({
      method: 'post',
      url: "/login",
      data: formData,
    }).then(res=>{
      var decoded = JWT.decode(res.headers["x-auth"]);
      var user = {
        jwt:res.headers["x-auth"],
        info:decoded
      }
      store.dispatch( login(user));
    }).catch(err=>console.log(err))
  }
}

const mapStateToProps = state => {
  return { user: state.personal_info };
};
const LoginForm = connect(mapStateToProps)(Login);
export  {LoginForm};
