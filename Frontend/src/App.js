import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Social from "./pages/Social";
import Blog from "./pages/Blog";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Container = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  height: 100vh;
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Social" component={Social} />
      </Switch>
      <Navbar />
    </Container>
  );
};

export default App;
