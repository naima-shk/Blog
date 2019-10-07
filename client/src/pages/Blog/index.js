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

const BlogList = styled.ul`
  list-style: none;
  margin-left: 20%;
`;

const BlogPost = styled.li`
  margin: 25px 0 25px 0;
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

const PublishDate = styled.div`
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
      <BlogList>
      {blogsMetadata.reverse().map((blog, index) => (
        <BlogPost key={index}>
          <LinkToPost key={blog.id} to={`${match.url}/${blog.id}`}>
            {blog.title}
          </LinkToPost>
          <Metadata>
            <PublishDate>{ blog.date }</PublishDate>
            <Description>{ blog.description }</Description>
          </Metadata>
        </BlogPost>
      ))}
      </BlogList>
    </Container>
  );
};

export default Blog;
