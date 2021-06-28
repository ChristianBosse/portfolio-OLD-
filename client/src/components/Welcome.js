import React from "react";
import landingVideo from "../Media/landingpage.mp4";
import styled from "styled-components";

const Welcome = () => {
  return (
    <>
      <Video autoPlay loop muted>
        <source src={landingVideo} type="video/mp4" />
      </Video>
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
