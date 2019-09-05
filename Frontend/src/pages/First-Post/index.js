import React from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";
import Template from "../../components/Template";
import FirstPost from "../../assets/blog-posts/first-post/index.mdx";

const Container = styled.div`
  display: inline;
  justify-content: center;
  height: 100vh;
`;

const PostContainer = styled.div``;

const Introduction = () => {
  return (
    <Container>
      <BackLink />
      <PostContainer>
        <Template source={FirstPost} />
      </PostContainer>
    </Container>
  );
};

export default Introduction;
