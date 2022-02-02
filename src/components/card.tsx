import * as React from "react";
import { useAppSelector } from "../redux/hooks";
import Cocktail from "./cocktail";
import { CoktailInfo } from "../types";

import styled from "styled-components";

const Card = () => {
  // 보기 상태
  const { baseState } = useAppSelector((state) => state.base);

  // 보기 상태에 따라 cards에 재할당
  let cards;

  if (baseState === "전체") {
    cards = useAppSelector((state) => state.card).all;
  }
  if (baseState === "진") {
    cards = useAppSelector((state) => state.card).jin;
  }
  if (baseState === "보드카") {
    cards = useAppSelector((state) => state.card).vodka;
  }
  if (baseState === "럼") {
    cards = useAppSelector((state) => state.card).rum;
  }
  if (baseState === "위스키") {
    cards = useAppSelector((state) => state.card).whiskey;
  }
  if (baseState === "데킬라") {
    cards = useAppSelector((state) => state.card).tequila;
  }
  if (baseState === "브랜디") {
    cards = useAppSelector((state) => state.card).brandy;
  }
  if (baseState === "리큐어") {
    cards = useAppSelector((state) => state.card).liqueur;
  }
  if (baseState === "기타") {
    cards = useAppSelector((state) => state.card).others;
  }

  return (
    <Container>
      <Grid>
        {cards &&
          cards.map((v: CoktailInfo, i: number) => (
            <Cocktail key={v.id! + i} data={v} />
          ))}
      </Grid>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  background-color: #70aabb;
  padding: 20px 0px;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
