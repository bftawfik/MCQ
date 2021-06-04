import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Home from "../src/Pages/Home/Home";
import SingleQuestion from "../src/Pages/SingleQuestion/SingleQuestion";
import UserScore from "../src/Pages/UserScore/UserScore";
import Footer from "../src/Components/Footer/Footer";

import missingData from "../src/Mock";

function App() {
  return (
    <Router>
      <Header appName={missingData.orgName} />
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
      <Footer appName={missingData.orgName} />
    </Router>
  );
}

export default App;
