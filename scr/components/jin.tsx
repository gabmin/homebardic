import * as React from "react";
import Coktail from "./cocktail";
import styled from "styled-components";

const Jin = () => {
  const data = {
    name: "스크루드라이버",
    base: "보드카 45ml",
    ingredient: ["오렌지주스 fill up"],
    method: "빌드",
    glass: "롱드링크 잔",
    description: "도수 약 13도 정도의 가볍게 먹기 좋은 술이다.",
  };

  return (
    <Container>
      <Grid>
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
        <Coktail data={data} />
      </Grid>
    </Container>
  );
};

export default Jin;

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
