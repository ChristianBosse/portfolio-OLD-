import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Head>
        <Name>CB</Name>
        <Wrapper>
          <LinkText>Home</LinkText>
          <LinkText>Experience</LinkText>
          <LinkText>Contact</LinkText>
        </Wrapper>
      </Head>
    </>
  );
};

const Head = styled.div`
  height: 50px;
  max-width: 100vw;
  background-color: #03071e;
`;

const Name = styled.span`
  padding: 10px;
  font-weight: lighter;
  font-size: 1.5em;
  color: #e63946;
  display: flex;
  align-content: center;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LinkText = styled.p`
  color: white;
`;

export default Header;
