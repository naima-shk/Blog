import React from "react";
import styled from "styled-components";
import BackLink from "./BackLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: inherit;
  padding-right: 24px;
  padding-left: 24px;
`;

const Span = styled.span``;

const Template = () => {
  return (
    <Container>
      <BackLink />
      <Span>blog post is supposed to render</Span>
    </Container>
  );
};

export default Template;
