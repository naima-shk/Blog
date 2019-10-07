import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Template from "./components/Template";
import Footer from "./components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 728px;
  height: 100vh;
  margin: 0;
  font-family: Menlo, Monaco, "Courier New", Courier, monospace;
  background-color: papayawhip;
  margin: 0 auto;
  
  
   
`;


const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={Template} />
      </Switch>
      <Footer />
    </Container>
  );
};

export default App;
