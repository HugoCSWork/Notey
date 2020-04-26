import React from "react";
import Layout from "./hoc//Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Register from "./containers/Auth/Register/Register";
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated
} from "./containers/Auth/routes";
import Login from "./containers/Auth/Login/Login";
import Reminder from "./containers/Reminder/Reminder";
import VerifyEmail from "./containers/Auth/VerifyEmail/VerifyEmail";
import Logout from "./containers/Auth/Logout/Logout";
import Notes from "./containers/Notes/NotesList/Notes";
const App = ({ emailVerified }) => {
  return (
    <Layout>
      <Switch>
        <Route
          exact
          path="/"
          component={
            !emailVerified
              ? UserIsAuthenticated(VerifyEmail)
              : UserIsAuthenticated(Reminder)
          }
        />
        <Route
          exact
          path="/notes"
          component={
            !emailVerified
              ? UserIsAuthenticated(VerifyEmail)
              : UserIsAuthenticated(Notes)
          }
        />
        <Route path="/register" component={UserIsNotAuthenticated(Register)} />
        <Route path="/login" component={UserIsNotAuthenticated(Login)} />
        <Route path="/logout" component={UserIsAuthenticated(Logout)} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

const mapStateToProps = ({ firebase }) => ({
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(App);
