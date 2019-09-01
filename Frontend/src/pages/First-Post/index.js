import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";
import Template from "../../components/Template";
import firstPost from "../../assets/blog-posts/first-post/index.mdx";

const Container = styled.div`
  display: inline;
  justify-content: center;
  height: 100vh;
`;

const PostContainer = styled.div``;

const FirstPost = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(firstPost);
      const data = await res.text();
      setPost(data);
    })();
  });

  return (
    <Container>
      <BackLink />
      <PostContainer>
        <Template source={post} />
      </PostContainer>
    </Container>
  );
};

export default FirstPost;
