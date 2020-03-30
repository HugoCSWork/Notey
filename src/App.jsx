import React from "react";
import Layout from "./hoc//Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./containers/Auth/Register/Register";
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated
} from "./containers/Auth/routes";

const App = ({ email_verified }) => {
  return (
    <Layout>
      <Switch>
        <Route path="/todos" component={UserIsNotAuthenticated(Register)} />
        <Route path="/account" />
        <Route path="/logout" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
