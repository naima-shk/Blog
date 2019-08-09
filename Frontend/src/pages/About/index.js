import React from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
`;

const About = () => {
  return (
    <Container>
      <BackLink />
      <Text>About Me!</Text>
    </Container>
  );
};

export default About;
