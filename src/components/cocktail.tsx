import * as React from "react";
import { FunctionComponent } from "react";
import { CoktailInfo } from "../types";
import styled from "styled-components";

const Cocktail: FunctionComponent<{ data: CoktailInfo }> = ({ data }) => {
  return (
    <Container>
      <Title>{data.card.name}</Title>
      <ContentsGrid>
        <Content>기주 : {data.card.base}</Content>
        <Content>재료 : {data.card.ingredient}</Content>
        <Content>용법 : {data.card.method}</Content>
        <Content>잔: {data.card.glass}</Content>
        <Content>설명: {data.card.description}</Content>
      </ContentsGrid>
    </Container>
  );
};

export default Cocktail;

const Container = styled.div`
  width: 291px;
  height: 100%;
  margin: 20px;
  background-color: red;
  border: 2px solid #245079;
  border-radius: 10px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const ContentsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  margin: 5px;
`;