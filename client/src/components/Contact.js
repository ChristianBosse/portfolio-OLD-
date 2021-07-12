import React, { useState } from "react";
import styled from "styled-components";
import Wave from "react-wavify";
import emailjs from "emailjs-com";

const Contact = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
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
          setContactSuccess((e) => !e);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const CheckSuccess = async () => {
    await delay(5000);
    setContactSuccess(false);
  };

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
            <Name type="text" placeholder="Name" name="name" required />
            <Email type="text" placeholder="Email" name="email" required />
            <Message
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
              required
            />

            <SubmitBtn
              onClick={CheckSuccess}
              type="submit"
              value="Get in Touch"
            />
            {contactSuccess ? (
              <Success>Your Email has been sent!</Success>
            ) : (
              <></>
            )}
          </Form>
        </ContactUs>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Success = styled.p`
  color: green;
  margin-top: 1em;
  font-weight: bold;
  font-size: 1.2em;
`;

const SubmitBtn = styled.input`
  width: 11.5em;
  height: 2.5em;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
  border: solid rgb(230, 57, 70) 1px;
  font-weight: bold;
  font-size: 1.5em;
  color: rgb(230, 57, 70);
  background-size: 200% 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 50%,
    rgb(230, 57, 70) 50%
  );
  transition: all 1s;
  &:hover {
    color: white;
    background-position: -100% 0;
  }
  &:focus {
    border: solid rgb(230, 57, 70) 1px;
  }
`;

const GetInTouch = styled.p`
  font-size: 3em;
  margin-bottom: 1.5em;
  margin-top: 2em;
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
  &:focus {
    border: none;
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
  &:focus {
    border: none;
  }
`;

const Message = styled.textarea`
  background-color: rgba(255, 255, 255, 0.1);
  height: 12em;
  width: 20em;
  border-radius: 0.7em;
  border: solid white 1px;
  color: white;
  margin-bottom: 2em;
  ::placeholder {
    color: white;
    text-align: center;
    font-size: 1.5em;
  }
  &:focus {
    border: none;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContactUs = styled.div`
  max-width: 99.999%;
  min-width: 99.999%;
  height: 100%;
  background-color: #14213d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TheWave = styled(Wave)`
  z-index: 3;
  position: relative;
  top: 1vh;
  max-width: 100vw;
`;

export default Contact;
