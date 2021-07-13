import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <Head id="home">
        <Name>CB</Name>
        <Wrapper>
          <Link
            className="LinkHover"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
          >
            Home
          </Link>
          <Link
            className="LinkHover"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
          >
            Experience
          </Link>
          <Link
            className="LinkHover"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={1000}
          >
            Contact
          </Link>
        </Wrapper>
      </Head>
    </>
  );
};

const Head = styled.div`
  height: 50px;
  max-width: 100vw;
  background-color: #03071e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.span`
  padding: 10px;
  font-weight: lighter;
  font-size: 1.5em;
  color: #e63946;
`;

const Wrapper = styled.div``;

export default Header;
