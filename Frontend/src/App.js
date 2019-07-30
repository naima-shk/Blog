import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home";
import about from "./pages/about";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import contact from "./pages/contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Social" component={Social} />
        <Route exact path="/Contact" component={contact} />
      </Switch>
    </div>
  );
}

export default App;
