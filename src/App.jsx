import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../src/Pages/Home/Home";
import SingleQuestion from "../src/Pages/SingleQuestion/SingleQuestion";
import UserScore from "../src/Pages/UserScore/UserScore";
function App() {
  return (
    <Router>
      <div>header</div>
      <Switch>
        <Route path="/score">
          <UserScore />
        </Route>
        <Route path="/question">
          <SingleQuestion />
        </Route>
        <Route path="/" exact>
          <Home msg="home" />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
      <div>footer</div>
    </Router>
  );
}

export default App;
