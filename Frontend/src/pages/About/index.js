import React from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";

const Container = styled.div`
  display: block;
  flex-direction: column;
  height: 700vh;
`;

const Text = styled.p`
  display: block;
  justify-content: center;
  padding : 10em;
  background :#A55959;
  font-family:  Georgia, serif;
  text-transform:  capitalize;
  font-size:20px;
  font-color: #FFFFFF;
  `;

const About = () => {
  return (
    <Container>
      <BackLink />
      <Text >
       <b>Great things are done by a series of small things brought together.</b>
      I am a Freelance Javascipt Developer from Pakistan  . I build websites using Javascipt more  especifically Reactjs , Postgre sql , styled components
      </Text>
    </Container>
  );
};

export default About;
