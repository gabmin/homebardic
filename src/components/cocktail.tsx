import * as React from "react";
import { FunctionComponent } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { deleteCardDB } from "../redux/actions/cocktailActions";
import { CoktailInfo } from "../types";
import styled from "styled-components";
import { isReturnStatement } from "typescript";

const Cocktail: FunctionComponent<{ data: CoktailInfo }> = ({ data }) => {
  const ingredient = data.ingredient.split(",");
  const dispatch = useAppDispatch();
  const onClickDelete = () => {
    const deleteConfirm = window.confirm("삭제 하시겠습니까??");
    if (deleteConfirm) {
      dispatch(deleteCardDB(data.id!));
      alert("삭제 되었습니다.");
    }
  };
  return (
    <Container>
      <Title>{data.name}</Title>
      <DeleteBtn onClick={onClickDelete}>X</DeleteBtn>
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
        <DescGrid>
          <DescTitle>설명: </DescTitle>
          <Desc>{data.description}</Desc>
        </DescGrid>
      </ContentsGrid>
    </Container>
  );
};

export default Cocktail;

const Container = styled.div`
  width: 291px;
  height: 100%;
  margin: 20px;
  background-color: #b6e4e5;
  border: 2px solid #245079;
  border-radius: 10px;
  padding: 10px;
  position: relative;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
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

const DescGrid = styled.div`
  display: flex;
`;
const DescTitle = styled.div`
  width: 40px;
  margin: 5px;
`;
const Desc = styled.div`
  width: 90%;
`;
