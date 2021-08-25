import React from "react";
import "./App.css";
import PageContainer from "./components/pageContainer";
import LoginForm from "./pages/login/index";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route exect path="/login">
            <LoginForm />
          </Route>
          <Route path="/">
            <PageContainer />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;