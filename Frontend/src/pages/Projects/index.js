import React from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";
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
      <Text>Here's what i made!</Text>
    </Container>
  );
};

export default Projects;
