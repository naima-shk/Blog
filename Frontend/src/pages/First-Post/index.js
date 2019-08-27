import React from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";
import Template from "../../components/Template";
import firstPost from "../../assets/Blog-posts/first-post/index.md";

const Container = styled.div`
  display: inline;
  justify-content: center;
  height: 700vh;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
`;

const PostContainer = styled.div`
  height: 600px;
`;

const FirstPost = () => {
  return (
    <Container>
      <BackLink />
      <Text>My First Blog Post!</Text>
      <PostContainer>
        <Template source={firstPost} />
      </PostContainer>
    </Container>
  );
};

export default FirstPost;
