import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Greeting = styled.h1`
  display: flex;
  font-size: 38px;
  justify-content: center;
`;

const Description = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

function Home() {
  const greeting = "Hi, I'm Naima!";
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
