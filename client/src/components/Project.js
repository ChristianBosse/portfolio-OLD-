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
  height: 100%;
  min-width: 99.999%;
  background-color: white;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
`;

const ProjectTitle = styled.a`
  font-size: 3.5vh;
  font-weight: bold;
  margin-left: 0.5em;
  color: #14213d;
  display: inline-block;
  margin-bottom: 0.5em;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

const ProjectDesc = styled.p`
  margin-bottom: 2em;
  margin-left: 0.8em;
  font-size: 2vh;
`;

const ProjectLang = styled.p`
  color: red;
  margin-left: 0.8em;
  padding-bottom: 1vh;
  font-size: 2vh;
`;

const Text = styled.p`
  background-color: white;
  margin-bottom: 15vh;
  color: #e63946;
  font-weight: normal;
  text-align: center;
  font-size: 4vh;
`;

const Card = styled.div`
  height: 60vh;
  width: 30vw;
  border: 1px #14213d solid;
  border-bottom: 3px #14213d solid;
  transition-duration: 0.5s;
  margin-bottom: 20vh;

  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1366px) {
    width: 40vw;
  }
  @media screen and (max-width: 1024px) {
    width: 60vw;
  }
  @media screen and (max-width: 764px) {
    width: 75vw;
  }
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

export default Project;
