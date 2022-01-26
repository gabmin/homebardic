import * as React from "react";
import styled from "styled-components";

const Contents = () => {
  return (
    <Container>
      <ButtonGrid>
        <Test type="button">진</Test>
        <Button type="button">보드카</Button>
        <Button type="button">럼</Button>
        <Button type="button">위스키</Button>
        <Button type="button">데킬라</Button>
        <Button type="button">브랜디</Button>
        <Button type="button">리큐어</Button>
        <Button type="button">기타</Button>
      </ButtonGrid>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #245079;
`;

const ButtonGrid = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Test = styled.button`
  width: 150px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  border: 1px #70aabb;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #70aabb;
`;
