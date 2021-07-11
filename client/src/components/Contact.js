import React from "react";
import styled from "styled-components";
import Wave from "react-wavify";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <TheWave
          fill="#14213d"
          paused={false}
          options={{
            height: 30,
            amplitude: 25,
            speed: 0.25,
            points: 6,
          }}
        />
        <ContactUs></ContactUs>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const ContactUs = styled.div`
  position: absolute;
  top: 195vh;
  max-width: 99.999%;
  min-width: 99.999%;
  height: 80vh;
  background-color: #14213d;

  @media screen and (max-width: 360px) {
    top: 330vh;
  }
  @media screen and (max-width: 420px) {
    top: 320vh;
  }
  @media screen and (min-width: 280px) and (max-width: 320px) {
    top: 360vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    top: 220vh;
  }
  @media screen and (min-width: 1000px) and (max-width: 1124px) {
    top: 190vh;
  }
`;

const TheWave = styled(Wave)`
  z-index: 3;
  position: relative;
  top: 160vh;
  max-width: 100vw;

  @media screen and (min-width: 400px) and (max-width: 767px) {
    top: 280vh;
  }
  @media screen and (min-width: 340px) and (max-width: 399px) {
    top: 274vh;
  }
  @media screen and (min-width: 300px) and (max-width: 320px) {
    top: 300vh;
  }
  @media screen and (min-width: 200px) and (max-width: 299px) {
    top: 310vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    top: 190vh;
  }
  @media screen and (min-width: 1000px) and (max-width: 1124px) {
    top: 165vh;
  }
`;

export default Contact;
