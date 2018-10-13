import React, { Component } from 'react'
import {LoginForm} from './components/authentification/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import {Alumni_page} from "./components/profile/Alumni";
import {Cac_admin_page} from "./components/profile/CAC_admin";
import {School_admin_page} from "./components/profile/School_admin";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route path="/alumni" component = {Alumni_page}/>
            <Route path="/cac_admin" component = {Cac_admin_page}/>
            <Route path="/school_admin" component = {School_admin_page}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
