import React from "react";
import Layout from "./hoc//Layout";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/todo" />
        <Route path="/account" />
        <Route path="/logout" />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
