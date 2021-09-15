import React, { useEffect, useState } from "react";
import Home from "./Elements/Home/Home";
import codePlatoon from "./Elements/CodePlatoon/CodePlatoon";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";

const App = () => {
  useEffect(() => {
    if (window.innerWidth <= 786) {
      document.documentElement.style.overflowX = "hidden";
    }
  }, []);
  document.body.style.overflowY = "auto";

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/home" />} />
        <Route path="/home" exact component={Home} />
        <Route path="/events/platoon" exact component={codePlatoon} />
      </Switch>
    </HashRouter>
  );
};

export default App;
