import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import styled from "styled-components";
//mport Background  from '../../../Image/coding duck1.png';

const Container = styled.div`
  margin: 0;
  font-family: Cormorant;
  height: 100vh;
  background-color:papayawhip ;
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
        <Route exact path="/Blog" component={Blog} />
      </Switch>
    </Container>
  );
};

export default App;
