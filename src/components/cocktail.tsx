import * as React from "react";
import { FunctionComponent } from "react";
import { CoktailInfo } from "../types";
import styled from "styled-components";

const Cocktail: FunctionComponent<{ data: CoktailInfo }> = ({ data }) => {
  console.log("카드", data);
  const ingredient = data.ingredient.split(",");
  return (
    <Container>
      <Title>{data.name}</Title>
      <ContentsGrid>
        <Content>기주 : {data.base}</Content>
        <Ingredient>
          <IngreTitle>재료 :</IngreTitle>
          <div>
            {ingredient.map((e) => (
              <Index>{e}</Index>
            ))}
          </div>
        </Ingredient>
        <Content>용법 : {data.method}</Content>
        <Content>글라스: {data.glass}</Content>
        <Content>설명: {data.description}</Content>
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

const Ingredient = styled.div`
  display: flex;
`;

const IngreTitle = styled.div`
  margin: 5px;
`;
const Index = styled.div`
  margin: 5px 0px;
`;
