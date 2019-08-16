import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import background from "../../assets/background.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image:  url(${background});
`;

const Greeting = styled.h1`
  display: flex;
  justify-content: center;
`;

const Description = styled.h2`
  display: flex;
  justify-content: center;
`;

function Home() {
  const greeting = "Hi I'm Naima!";
  const description = "A Full Stack Developer From Pakistan";
  
  return (
    <Container>
      <Greeting>{greeting}</Greeting>
      <Description>{description}</Description>
      
      <Navbar />
    </Container>
  );
}

export default Home;
