import React from "react";
import styled from "styled-components";
import Wave from "react-wavify";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_couprq9",
        e.target,
        "user_crG8QptGSQuA3QDSDiVJN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
        <ContactUs>
          <Form onSubmit={sendEmail}>
            <GetInTouch>Get in Touch!</GetInTouch>
            <Name type="text" placeholder="Name" name="name" />
            <Email type="text" placeholder="Email" name="email" />
            <Message
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            />
          </Form>
        </ContactUs>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const GetInTouch = styled.p`
  font-size: 3em;
  margin-bottom: 1.5em;
  font-weight: bold;
  color: white;
`;

const Name = styled.input`
  margin-bottom: 2em;
  background-color: rgba(255, 255, 255, 0.1);
  height: 4em;
  width: 20em;
  border-radius: 0.7em;
  border: solid white 1px;
  color: white;

  ::placeholder {
    color: white;
    text-align: center;
    font-size: 1.5em;
  }
`;

const Email = styled.input`
  margin-bottom: 2em;
  background-color: rgba(255, 255, 255, 0.1);
  height: 4em;
  width: 20em;
  border-radius: 0.7em;
  border: solid white 1px;
  color: white;

  ::placeholder {
    color: white;
    text-align: center;
    font-size: 1.5em;
  }
`;

const Message = styled.textarea`
  background-color: rgba(255, 255, 255, 0.1);
  height: 12em;
  width: 20em;
  border-radius: 0.7em;
  border: solid white 1px;
  color: white;

  ::placeholder {
    color: white;
    text-align: center;
    font-size: 1.5em;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContactUs = styled.div`
  position: absolute;
  top: 195vh;
  max-width: 99.999%;
  min-width: 99.999%;
  height: 80vh;
  background-color: #14213d;
  display: flex;
  align-items: center;
  justify-content: center;
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
