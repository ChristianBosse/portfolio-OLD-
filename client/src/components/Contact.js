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
  const linkedInBtn = () => {
    window.open("https://www.linkedin.com/in/christianbosse-/", "_blank");
  };
  const gitHubBtn = () => {
    window.open("https://github.com/ChristianBosse", "_blank");
  };

  return (
    <>
      <TheWave
        fill="#14213d"
        id="contact"
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
      <Wrapper>
        <Svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="84px"
          height="84px"
          onClick={linkedInBtn}
        >
          <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
        </Svg>
        <Svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="84px"
          height="84px"
          onClick={gitHubBtn}
        >
          <path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 15.908203 9 C 11.989203 9 9 11.974766 9 15.884766 C 9 19.017766 10.967203 21.699578 13.783203 22.642578 C 14.148203 22.706578 14.275391 22.482781 14.275391 22.300781 C 14.275391 22.126781 14.267578 21.159453 14.267578 20.564453 C 14.267578 20.564453 12.283094 20.991656 11.871094 19.722656 C 11.871094 19.722656 11.547891 18.905406 11.087891 18.691406 C 11.087891 18.691406 10.444766 18.247859 11.134766 18.255859 C 11.134766 18.255859 11.833656 18.312328 12.222656 18.986328 C 12.840656 20.081328 13.878203 19.762078 14.283203 19.580078 C 14.346203 19.128078 14.530328 18.810906 14.736328 18.628906 C 13.157328 18.454906 11.5625 18.224719 11.5625 15.511719 C 11.5625 14.733719 11.776516 14.345703 12.228516 13.845703 C 12.156516 13.662703 11.911781 12.901781 12.300781 11.925781 C 12.895781 11.742781 14.251953 12.6875 14.251953 12.6875 C 14.814953 12.5365 15.424344 12.449219 16.027344 12.449219 C 16.630344 12.449219 17.241688 12.5365 17.804688 12.6875 C 17.804688 12.6875 19.160859 11.743781 19.755859 11.925781 C 20.143859 12.909781 19.897172 13.663703 19.826172 13.845703 C 20.278172 14.345703 20.556641 14.734719 20.556641 15.511719 C 20.556641 18.239719 18.8905 18.454906 17.3125 18.628906 C 17.5745 18.850906 17.796875 19.2715 17.796875 19.9375 C 17.796875 20.8895 17.789062 22.072734 17.789062 22.302734 C 17.789063 22.484734 17.916438 22.705578 18.273438 22.642578 C 21.088437 21.698578 23 19.017766 23 15.884766 C 23 11.974766 19.827203 9 15.908203 9 z M 11.5625 18.486328 C 11.5065 18.470328 11.459359 18.479719 11.443359 18.511719 C 11.427359 18.543719 11.449859 18.589094 11.505859 18.621094 C 11.553859 18.645094 11.609 18.637656 11.625 18.597656 C 11.641 18.565656 11.6185 18.517328 11.5625 18.486328 z M 11.816406 18.722656 C 11.789656 18.716656 11.764141 18.720234 11.744141 18.740234 C 11.704141 18.772234 11.711766 18.834625 11.759766 18.890625 C 11.807766 18.930625 11.870156 18.954062 11.910156 18.914062 C 11.950156 18.882062 11.942531 18.819672 11.894531 18.763672 C 11.870531 18.743672 11.843156 18.728656 11.816406 18.722656 z M 12.113281 19.089844 C 12.084531 19.079844 12.053297 19.081656 12.029297 19.097656 C 11.981297 19.129656 11.981297 19.202625 12.029297 19.265625 C 12.077297 19.328625 12.149453 19.360125 12.189453 19.328125 C 12.236453 19.296125 12.236453 19.216297 12.189453 19.154297 C 12.169453 19.122297 12.142031 19.099844 12.113281 19.089844 z M 12.4375 19.486328 C 12.404875 19.482328 12.375469 19.493578 12.355469 19.517578 C 12.316469 19.557578 12.331531 19.635406 12.394531 19.691406 C 12.457531 19.755406 12.536172 19.764797 12.576172 19.716797 C 12.616172 19.684797 12.593109 19.597016 12.537109 19.541016 C 12.505609 19.509016 12.470125 19.490328 12.4375 19.486328 z M 12.982422 19.802734 C 12.911422 19.786734 12.824594 19.809234 12.808594 19.865234 C 12.792594 19.921234 12.848734 19.985953 12.927734 20.001953 C 12.998734 20.033953 13.085562 20.000312 13.101562 19.945312 C 13.125563 19.890312 13.069422 19.826734 12.982422 19.802734 z M 14.052734 19.828125 C 13.973734 19.844125 13.917781 19.899891 13.925781 19.962891 C 13.933781 20.017891 14.012797 20.049203 14.091797 20.033203 C 14.178797 20.017203 14.23475 19.96225 14.21875 19.90625 C 14.21075 19.85025 14.132734 19.819125 14.052734 19.828125 z M 13.529297 19.890625 C 13.441297 19.890625 13.378906 19.938141 13.378906 19.994141 C 13.378906 20.057141 13.442109 20.105656 13.537109 20.097656 C 13.625109 20.097656 13.6875 20.050141 13.6875 19.994141 C 13.6875 19.930141 13.609297 19.882625 13.529297 19.890625 z" />
        </Svg>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #14213d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Svg = styled.svg`
  transition-duration: 0.5s;
  fill: rgb(230, 57, 70);
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  margin: 2vh 0vh 2vh 0vh;
`;

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
