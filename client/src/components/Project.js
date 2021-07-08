import React from "react";
import styled from "styled-components";
import ApexTracker from "../Media/apexTracker.jpg";

const Project = () => {
  return (
    <>
      <Text>Projects and Experience</Text>
      <Wrapper>
        <Card>
          <Image src={ApexTracker} alt="my first project" />
          <p>Apex Legend Tracker</p>
          <p>Concordia University Final Project</p>
          <p>React / Styled-components / Express / Node.js / MongoDB </p>
        </Card>
        <Card></Card>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  min-width: 100vw;
  background-color: white;
  position: absolute;
  top: 85vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 540px) {
    flex-direction: column;
  }
  @media only screen and (max-height: 839px) {
    height: 190vh;
  }
  @media only screen and (max-height: 568px) {
    height: 220vh;
  }
  @media only screen and (min-height: 1024px) {
    height: 80vh;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
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
    height: 26em;
    width: 26em;
  }
  @media only screen and (max-width: 900px) {
    height: 24em;
    width: 24em;
  }
  @media only screen and (max-width: 800px) {
    height: 20em;
    width: 20em;
  }
  @media only screen and (max-width: 700px) {
    height: 18em;
    width: 18em;
  }
  @media only screen and (max-width: 600px) {
    height: 18em;
    width: 18em;
  }
  @media only screen and (max-width: 500px) {
    height: 18em;
    width: 18em;
  }
  @media only screen and (max-width: 400px) {
    height: 18em;
    width: 18em;
  }
  @media only screen and (max-width: 300px) {
    height: 12em;
    width: 12em;
  }
  @media only screen and (max-width: 200px) {
    height: 12em;
    width: 12em;
  }
`;

export default Project;
