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

const Blog = () => {
  return (
    <Container>
      <BackLink />
      <Text>My Blog!</Text>
    </Container>
  );
};

export default Blog;
