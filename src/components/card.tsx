import * as React from "react";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { CocktailDB } from "../redux/actions/cocktailActions";
import Coktail from "./cocktail";

import styled from "styled-components";

const Card = () => {
  const { baseState } = useAppSelector((state) => state.base);
  const cards = useAppSelector((state) => state.card);
  console.log(cards.manual);

  const test = {
    base: "보드카 45ml",
    description: "도수 약 13도 정도의 가볍게 먹기 좋은 술이다.",
    glass: "롱드링크글라스",
    id: 2,
    ingredient: "오렌지주스 fill up",
    method: "빌드",
    name: "스크류드라이버",
  };
  return (
    <Container>
      <Grid>
        {cards.manual.map((v, i) => (
          <Coktail key={i} data={v} />
        ))}
      </Grid>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  background-color: #70aabb;
  padding: 20px 0px;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
