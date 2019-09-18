import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BackLink from "../../components/BackLink";
import blogsMetadata from "../../assets/blog-posts";

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

const Metadata = styled.div`
  padding-left: 25px;
`;

const Date = styled.div`
  font-size: 12px;
`;

const Description = styled.div`
  font-size: 12px;
`;


const Blog = ({ match }) => {
  return (
    <Container>
      <BackLink to="/" />
      <Text>My Blog posts!</Text>
      {blogsMetadata.map((blog, index) => (
        <div key={index}>
          <LinkToPost key={blog.id} to={`${match.url}/${blog.id}`}>
            {blog.title}
          </LinkToPost>
          <Metadata>
            <Date>{ blog.date }</Date>
            <Description>{ blog.description }</Description>
          </Metadata>
        </div>
      ))}
    </Container>
  );
};

export default Blog;
