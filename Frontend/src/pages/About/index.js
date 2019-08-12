import React, { useState } from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";

const Container = styled.div`
  display: block;
  flex-direction: column;
  height: 100vh;
`;

const MainText = styled.h1`
  display: block;
  justify-content: center;
  margin: 25px 0 10px 25px;
  font-size: 20px;
  color: #a55959;
`;

const SubText = styled.p`
  display: block;
  justify-content: center;
  margin: 25px 0 10px 25px;
  font-size: 16px;
  color: #a55959;
`;

const Quote = styled.b`
  display: flex;
  justify-content: flex-start;
  margin-left: 25px;
  cursor: pointer;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  display: block;
  justify-content: center;
  margin-right: 10px;
  font-size: 14px;
  color: #a55959;
`;

const allQuotes = [
  `"Great things are done by a series of small things brought together."`,
  `"Whatever you are, be a good one."`,
  `"If you dream it, you can do it."`,
  `"Life is trying things to see if they work."`,
  `"Believe you can and you’re halfway there."`,
  `"What you seek is seeking you."`
];

const skills = ["React", "HTML", "CSS", "Node.js", "PostgreSQL", "SQL"];

const About = () => {
  const [quote, setQuote] = useState(allQuotes[5]);

  const changeQuote = () =>
    setQuote(allQuotes[Math.floor(Math.random() * allQuotes.length)]);

  return (
    <Container>
      <BackLink />
      <Quote onClick={changeQuote}>{quote}</Quote>
      <MainText>I'm a Javascipt Developer from Pakistan.</MainText>
      <SubText>I build applications and tools for the Web on the Web.</SubText>
      <SubText>Skills:</SubText>
      <SkillsList>
        {skills.map(skill => {
          return <Skill>{skill}</Skill>;
        })}
      </SkillsList>
    </Container>
  );
};

export default About;
