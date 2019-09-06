import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import BackLink from "../../components/BackLink";
import blogsMetadata from "../../assets/blog-posts";
import Template from "../../components/Template";

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

const Blog = ({ match }) => {
  return (
    <Container>
      <BackLink />
      <Text>My Blog posts!</Text>
      {blogsMetadata.map(blog => (
        <LinkToPost key={blog.id} to={`${match.url}/${blog.id}`}>
          {blog.title}
        </LinkToPost>
      ))}
      {/* THIS ROUTE TAG DOESN'T WORK AND NEEDS TO BE FIXED */}
      <Route path={`${match.path}/:blogId`} component={Template} />
    </Container>
  );
};

export default Blog;
