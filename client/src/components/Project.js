import React from "react";
import styled from "styled-components";
import ApexTracker from "../Media/apexTracker.jpg";
import myWebsite from "../Media/mywebsite.png";

const Project = () => {
  return (
    <>
      <Text>Projects and Experience</Text>
      <Wrapper>
        <Card>
          <Image src={ApexTracker} alt="my first project" />
          <ProjectTitle href="https://github.com/ChristianBosse/Apex-Tracker">
            Apex Legend Tracker
          </ProjectTitle>
          <ProjectDesc>Concordia University Final Project</ProjectDesc>
          <ProjectLang>
            React / Styled-components / Express / Node.js / MongoDB{" "}
          </ProjectLang>
        </Card>
        <Card>
          <Image src={myWebsite} />
          <ProjectTitle href="https://christianbosse.ca/">
            My Website
          </ProjectTitle>
          <ProjectDesc>
            My Personal Website. The very one you are on!
          </ProjectDesc>
          <ProjectLang>React / Styled-components</ProjectLang>
        </Card>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  min-width: 99.999%;
  background-color: white;
  position: absolute;
  top: 85vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media only screen and (max-height: 839px) {
    height: 260vh;
  }
  @media only screen and (max-height: 568px) {
    height: 300vh;
  }
  @media only screen and (min-height: 1024px) {
    height: 135vh;
  }
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
`;

const ProjectTitle = styled.a`
  font-size: 2em;
  color: #14213d;

  text-decoration: none;
  @media only screen and (max-width: 1000px) {
    font-size: 1.2em;
  }
  &:hover {
    color: red;
  }
`;

const ProjectDesc = styled.p`
  margin-bottom: 2em;
  @media only screen and (max-width: 1000px) {
    font-size: 0.8em;
  }
`;

const ProjectLang = styled.p`
  color: red;
  @media only screen and (max-width: 1000px) {
    font-size: 0.8em;
  }
`;

const Text = styled.p`
  position: relative;
  height: 20px;
  background-color: white;
  top: 69vh;
  color: #e63946;
  font-weight: normal;
  text-align: center;
  font-size: 2.5em;
  z-index: 2;
`;

const Card = styled.div`
  height: 38em;
  width: 38em;
  border: 1px #14213d solid;
  border-bottom: 3px #14213d solid;
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 1500px) {
    height: 36em;
    width: 36em;
  }
  @media only screen and (max-width: 1400px) {
    height: 34em;
    width: 34em;
  }
  @media only screen and (max-width: 1300px) {
    height: 32em;
    width: 32em;
  }
  @media only screen and (max-width: 1200px) {
    height: 30em;
    width: 30em;
  }
  @media only screen and (max-width: 1100px) {
    height: 28em;
    width: 28em;
  }
  @media only screen and (max-width: 1000px) {
    height: 28em;
    width: 26em;
    margin-bottom: 4em;
  }
  @media only screen and (max-width: 900px) {
    height: 28em;
    width: 24em;
    margin-bottom: 4em;
  }
  @media only screen and (max-width: 800px) {
    height: 28em;
    width: 20em;
  }
  @media only screen and (max-width: 700px) {
    height: 28em;
    width: 18em;
  }
  @media only screen and (max-width: 600px) {
    height: 28em;
    width: 18em;
  }
  @media only screen and (max-width: 500px) {
    height: 28em;
    width: 18em;
  }
  @media only screen and (max-width: 400px) {
    height: 28em;
    width: 18em;
  }
  @media only screen and (max-width: 300px) {
    height: 28em;
    width: 12em;
  }
  @media only screen and (max-width: 200px) {
    height: 12em;
    width: 12em;
  }
`;

export default Project;
