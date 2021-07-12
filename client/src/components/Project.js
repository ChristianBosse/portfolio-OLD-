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

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
`;

const ProjectTitle = styled.a`
  font-size: 2em;
  font-weight: bold;
  margin-left: 0.5em;
  color: #14213d;
  display: inline-block;
  margin-bottom: 0.5em;
  text-decoration: none;
  @media screen and (max-width: 1000px) {
    font-size: 1.2em;
  }
  &:hover {
    color: red;
  }
`;

const ProjectDesc = styled.p`
  margin-bottom: 2em;
  margin-left: 0.8em;
  @media screen and (max-width: 1000px) {
    font-size: 0.8em;
  }
`;

const ProjectLang = styled.p`
  color: red;
  margin-left: 0.8em;
  @media screen and (max-width: 1000px) {
    font-size: 0.8em;
  }
`;

const Text = styled.p`
  height: 20px;
  background-color: white;
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
`;

export default Project;
