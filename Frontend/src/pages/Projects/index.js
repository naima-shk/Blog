import React from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";
import {Link} from  "react-router-dom";
const Container = styled.div`
  display: inline;
  justify-content: center;
  height: 700vh;
`;
const Text = styled.p`
  display: flex;
  justify-content: center;
`;

const Projects = () => {
  return (
    <Container>
      <BackLink />
      <Text> Here's what i made! 
        <Link  href=" link to:https://github.com/naimiii?subject=Contact Form">  github</Link>  
      </Text>
    </Container>
  );
};

export default Projects;
