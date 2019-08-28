import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react";

const Container = styled.div`
  display: inline;
  justify-content: center;
  height: 700vh;
`;

const Template = ({ source }) => {
  return (
    <Container>
        <markdown-loader source={source} />
    </Container>
  );
};

export default Template;