import React from "react";
import { Route, Switch,Link } from "react-router-dom";
//import {Link} from "react-router-dom";
//import { Navigation} from "react-router-dom";
//import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import styled from 'styled-components';

const nav= styled.nav`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const Link = styled.Link`
  padding: 4em;
  background: papayawhip;
  `;


const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Social">Social</Link>
      </nav>
      
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
}

export default App;
