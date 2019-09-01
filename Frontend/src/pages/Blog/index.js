import React, { lazy, Suspense, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BackLink from "../../components/BackLink";
import { importMDX } from 'mdx.macro';
import { metadata } from "../../assets/blog-posts/first-post/index.mdx";

const Content = lazy(() => importMDX("../../assets/blog-posts/first-post/index.mdx"));

const Container = styled.div`
  display: inline;
  justify-content: center;
  height: 700vh;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
`;

const LinkToPost = styled(Link)`
  display: flex;
  color: black;
`;

const Blog = () => {
  useEffect(() => {
    console.log('document', Content)
    console.log('metadata', metadata)
  })
  return (
    <Container>
      <BackLink />
      <Text>My Blog posts!</Text>
      <LinkToPost to="/blog/1">First Post!</LinkToPost>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </Container>
  );
};

export default Blog;
