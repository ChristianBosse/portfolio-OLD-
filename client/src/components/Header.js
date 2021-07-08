import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Head>
        <Name>CB</Name>
        <Wrapper>
          <Link></Link>
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
`;

const Wrapper = styled.div``;

const Link = styled.span``;

export default Header;
