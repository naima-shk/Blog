import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import BackLink from "./BackLink";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: inherit;
  padding-right: 24px;
  padding-left: 24px;
`;

const Span = styled.span``;

const Template = ({ match }) => {
  const MDXDocument = lazy(() =>
    import(`../assets/blog-posts/${match.params.id}/index.mdx`)
  );

  return (
    <Container>
      <BackLink to="/blog" />
      <Suspense fallback={<div>loading...</div>}>
        <Span>
          <MDXDocument />
        </Span>
      </Suspense>
    </Container>
  );
};

export default Template;
