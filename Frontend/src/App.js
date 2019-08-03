import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const NavLink = styled(Link)`
  padding: 4em;
  background: papayawhip;
`;

const App = () => {
  return (
    <div className="App">
      <Nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Social">Social</NavLink>
      </Nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Social" component={Social} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
