import React from "react";
import landingVideo from "../Media/landingpage.mp4";
import styled from "styled-components";
import Typist from "react-typist";
import Particles from "react-particles-js";

const Welcome = () => {
  return (
    <>
      {/* <Video autoPlay loop muted>
        <source src={landingVideo} type="video/mp4" /> */}
      <Particles />
      <WelcomeText>
        <Typist cursor={{ hideWhenDone: true }}>
          Hello, my name is Christian Bosse.
          <Typist.Delay ms={1000} />
          <br />
          Welcome to my amaz
          <Typist.Delay ms={0} />
          nig
          <Typist.Backspace count={3} delay={800} />
          <Typist.Delay ms={600} />
          ing Website!
          <Typist.Delay ms={1000} />
          <br />
          Im a Full-Stack Web Developer and love using
          <Typist.Delay ms={500} />
          <br />
          React, CSS, Style-Components, Node.js, etc,
          <Typist.Delay ms={500} />
          <br />
          to make my website come to live.
          <Typist.Delay ms={1250} />
          <br />
          My Favorite hobby's are gaming and admiring nature.
          <Typist.Delay ms={1250} />
          <br />
          You can check my <span className="flash">project</span> and{" "}
          <span className="flash">contact</span> info below.
        </Typist>
      </WelcomeText>
      {/* </Video> */}
    </>
  );
};

const Video = styled.video`
  min-width: 100%;
  max-height: 100vh;
  object-fit: cover;
  filter: brightness(0.5);
  z-index: 0;
`;

const WelcomeText = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Welcome;
