import React, { useEffect } from "react";
import Home from "./Elements/Home/Home";
import codePlatoon from "./Elements/CodePlatoon/CodePlatoon";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

const App = () => {
  console.warn = () => {};
  console.log(
    "The codes are legally owned by Code Chef Ciem chapter, Any attempt to re-use/change them would cause legal actions against the accused. Hope you maintain the decorum, Thankyou!"
  );

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
