import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import Wave from "react-wavify";

const Welcome = () => {
  return (
    <>
      <Wrapper>
        <FirstText>
          Hello, I'm <span style={{ color: "#e63946" }}>Christian Bosse</span>
        </FirstText>

        <Typist cursor={{ hideWhenDone: true }} style={{ maxHeight: "29px" }}>
          <Typist.Delay ms={0} />
          <SecondText>
            A <span style={{ color: "#e63946" }}>Full-Stack Web Developer</span>{" "}
            graduated from the Concordia University.
          </SecondText>
        </Typist>
      </Wrapper>
      <Wave
        fill="#FFF"
        paused={false}
        options={{
          height: 30,
          amplitude: 25,
          speed: 0.25,
          points: 6,
        }}
        style={{
          zIndex: 3,
          position: "relative",
          top: "70vh",
          maxWidth: "100vw",
        }}
      />
    </>
  );
};

const Wrapper = styled.div`
  min-width: 99.999%;
  max-width: 99.999%;
  height: 80vh;
  background-color: #14213d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`;

const FirstText = styled.p`
  color: #f1faee;
  font-size: 3em;
  margin-bottom: 1em;
  font-weight: bold;
`;

const SecondText = styled.span`
  color: #f1faee;
  font-size: 1.5em;
  font-weight: bold;
`;

export default Welcome;
