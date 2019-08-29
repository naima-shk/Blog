import React from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: inherit;
  padding-right: 24px;
  padding-left: 24px;
`;

const Span = styled.span``;

const Template = ({ source }) => {
  return (
    <Container>
      <Span>{source ? <Markdown children={source} /> : null}</Span>
    </Container>
  );
};

export default Template;
