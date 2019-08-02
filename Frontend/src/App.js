import React from "react";
import { Route, Switch } from "react-router-dom";
import {Link,Navigation} from "react-router-dom";
//import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import styled from 'styled-components';



const Home =styled.Home
  font-family:sans-serif ;
  font-size: 1.3rem;
  border: none;
  border-radius:5px;
  padding: 8px ,7px;




const App = () => {
  return (
    <div className="App">
       <Navigation>
      <Link >
      <Link to="/"> Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Blog">Blog</Link>
      <Link to="/Social">Social</Link>
      </Link>
      </Navigation>
      
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
