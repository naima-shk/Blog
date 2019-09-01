import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: inherit;
  padding-right: 24px;
  padding-left: 24px;
`;

const Span = styled.span``;

const Template = ({ children }) => {
  return (
    <Container>
      <Span>{children ? { children } : <div>HELLO</div>}</Span>
    </Container>
  );
};

export default Template;
