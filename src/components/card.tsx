import * as React from "react";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { CocktailDB } from "../redux/actions/cocktailActions";
import Coktail from "./cocktail";

import styled from "styled-components";

const Card = () => {
  const { baseState } = useAppSelector((state) => state.base);
  const { card } = useAppSelector((state) => state.card);
  console.log(card);
  //   const data = {
  //     card: {
  //       name: "스크루드라이버",
  //       base: "보드카 45ml",
  //       ingredient: ["오렌지주스 fill up"],
  //       method: "빌드",
  //       glass: "롱드링크 잔",
  //       description: "도수 약 13도 정도의 가볍게 먹기 좋은 술이다.",
  //     },
  //   };
  if (baseState === "전체") {
  }
  return (
    <Container>
      <Grid>{/* <Coktail data={data} /> */}</Grid>
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
