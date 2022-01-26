import * as React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <Container>
      <ImageGrid>
        <Image src={logo} />
      </ImageGrid>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #245079;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;

const ImageGrid = styled.div`
  text-align: center;
`;
