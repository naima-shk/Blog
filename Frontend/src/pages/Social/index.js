import React from 'react';
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
const social = () => {
  return (
    <Container>
        <BackLink />
         <Text>My social accounts!</Text>
    </Container>
  );
}

export default social;