import React, { useState } from "react";
import styled from "styled-components";
import BackLink from "../../components/BackLink";

const Container = styled.div`
  display: block;
  flex-direction: column;
  height: 100vh;
 
`;

const MainText = styled.h1`
  display: flex;
  justify-content: center;
  margin: 25px 0 10px 25px;
  font-size: 25px;
  color: #a55959;
`;

const SubText = styled.p`
  display: flex;
  justify-content: center;
  margin: 25px 0 10px 25px;
  font-size: 19px;
  color: #a55959;
`;
const CurrentlyUsing = styled.ul`
  display: flex;
  justify-content: center;
  margin: 25px 0 10px 25px;
  font-size: 19px;
  color: #a55959;
`;

const Current = styled.li`
  display: flex;
  justify-content: center;
  margin: 25px 0 10px 25px;
  font-size: 19px;
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
  justify-content: center;
`;

const Skill = styled.li`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  font-size: 17px;
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
const tools =["Local Machine: dell inspiron (Core i5 ,7th Generation)", "Editor: Visual Studio Code", "News Letter: Medium"];
const About = () => {
  const [quote, setQuote] = useState(allQuotes[5]);

  const changeQuote = () =>
    setQuote(allQuotes[Math.floor(Math.random() * allQuotes.length)]);

  return (
    <Container>
      <BackLink />
      <Quote onClick={changeQuote}>{quote}</Quote>
      <MainText>I'm a Javascipt Developer from Pakistan.</MainText>
      <SubText>I build applications and tools for the Web on the Web.  </SubText>
      <SubText>I started this website as a place to document everything I learned while going through</SubText>
      <SubText>I aim to build things from scratch and contribute in open source projects.</SubText>
      <SubText>Skills:</SubText>
      <SkillsList>
        {skills.map(skill => {
          return <Skill>{skill}</Skill>;
        })}
      </SkillsList>
      <SubText>CurrentlyUsing :</SubText>
      <CurrentlyUsing>
        {tools.map(tools  => {
          return <Current>{tools}</Current>;
        })}
      </CurrentlyUsing>
     </Container>
  );
};

export default About;
