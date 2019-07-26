import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home"

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
