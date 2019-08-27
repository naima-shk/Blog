import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import FirstPost from "./pages/First-Post";
import styled from "styled-components";

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
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/1" component={FirstPost} />
      </Switch>
    </Container>
  );
};

export default App;
