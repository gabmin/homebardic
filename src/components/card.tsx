import * as React from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Coktail from "./cocktail";

import styled from "styled-components";

const Card = () => {
  const { baseState } = useAppSelector((state) => state.base);
  let cards;

  if (baseState === "전체") {
    cards = useAppSelector((state) => state.card).all;
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
  if (baseState === "리큐어") {
    cards = useAppSelector((state) => state.card).liqueur;
  }
  if (baseState === "기타") {
    cards = useAppSelector((state) => state.card).others;
  }

  return (
    <Container>
      <Grid>
        {cards && cards.map((v, i) => <Coktail key={i + v} data={v} />)}
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
