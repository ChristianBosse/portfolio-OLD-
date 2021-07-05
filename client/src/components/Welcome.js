import React from "react";
import landingVideo from "../Media/landingpage.mp4";
import styled from "styled-components";
import Typist from "react-typist";

const Welcome = () => {
  return (
    <>
      <Video autoPlay loop muted>
        <source src={landingVideo} type="video/mp4" />
      </Video>

      <Typist cursor={{ hideWhenDone: true }}>
        Hello, my name is Christian Bosse.
        <Typist.Delay ms={1000} />
        <br />
        Welcome to my amaz
        <Typist.Delay ms={0} />
        nig
        <Typist.Backspace count={3} delay={800} />
        <Typist.Delay ms={600} />
        ing Website
        <Typist.Delay ms={1000} />
        <br />
      </Typist>

      <Typist className="TypistExample-message" cursor={{ hideWhenDone: true }}>
        * Easy to style
        <Typist.Delay ms={1250} />
        <br />
        * Easy to customize
        <Typist.Delay ms={1250} />
        <br />
        * Easy to use backp
        <Typist.Delay ms={500} />
        sace
        <Typist.Backspace count={5} delay={1000} />
        <Typist.Delay ms={750} />
        space
        <Typist.Delay ms={1250} />
        <br />
        <span>
          * <span className="flash">docs</span>
        </span>
        <br />
        {""}
      </Typist>
    </>
  );
};

const Video = styled.video`
  min-width: 100%;
  max-height: 100vh;
  object-fit: cover;
  filter: brightness(0.5);
`;

export default Welcome;
