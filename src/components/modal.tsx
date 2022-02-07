import * as React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { selectedModal } from "../redux/reducers/modal";
import { addCardDB } from "../redux/actions/cocktailActions";

const Modal = () => {
  const dispatch = useAppDispatch();

  const [save, setSave] = useState(false);
  const [name, setName] = useState("");
  const [base, setBase] = useState("");
  const [ingredient, setIngredinent] = useState("");
  const [method, setMethod] = useState("");
  const [glass, setGlass] = useState("");
  const [desc, setDesc] = useState("");

  // 닫기 버튼
  const closeBtn = () => {
    dispatch(selectedModal(false));
  };

  // 칵테일 이름
  const onChangeName = useCallback((e) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  }, []);

  // 기주
  const onChangeBase = useCallback((e) => {
    e.preventDefault();
    setBase(e.currentTarget.value);
  }, []);

  //재료
  const onChangeIngredients = useCallback((e) => {
    e.preventDefault();
    setIngredinent(e.currentTarget.value);
  }, []);

  //기법
  const onChangeMethod = useCallback((e) => {
    e.preventDefault();
    setMethod(e.currentTarget.value);
  }, []);

  //글라스
  const onChangeGlass = useCallback((e) => {
    e.preventDefault();
    setGlass(e.currentTarget.value);
  }, []);

  //설명
  const onChangeDesc = useCallback((e) => {
    e.preventDefault();
    setDesc(e.currentTarget.value);
  }, []);

  // 저장하기
  const onClickBtn = () => {
    const data = {
      name: name,
      base: base,
      ingredient: ingredient,
      method: method,
      glass: glass,
      description: desc,
    };

    dispatch(addCardDB(data));
    alert("저장이 완료되었습니다!!");
    dispatch(selectedModal(false));
    window.location.replace("/");
  };

  return (
    <Background onClick={closeBtn}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={closeBtn}>X</CloseBtn>
        <Title>칵테일 레시피 추가하기</Title>
        <Container>
          <ContentsGrid>
            <TitleGrid>칵테일 이름</TitleGrid>
            <Input type="text" value={name} onChange={onChangeName}></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>기주</TitleGrid>
            <Input type="text" value={base} onChange={onChangeBase}></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>재료</TitleGrid>
            <Textarea value={ingredient} onChange={onChangeIngredients} />
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>기법</TitleGrid>
            <Input type="text" value={method} onChange={onChangeMethod}></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>글라스</TitleGrid>
            <Input type="text" value={glass} onChange={onChangeGlass}></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>설명</TitleGrid>
            <Textarea value={desc} onChange={onChangeDesc} />
          </ContentsGrid>
        </Container>
        <Button onClick={onClickBtn}>저장하기</Button>
      </ModalContainer>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 90%;
  padding: 16px;
  background: #515c81;
  border-radius: 10px;
  opacity: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 35px;
  position: absolute;
  top: 30px;
  right: 40px;
`;

const Container = styled.div`
  width: 70%;
  border-radius: 10px;
  background-color: #608d9b;
  margin: 30px auto 0px auto;
  display: inline-block;
`;

const Title = styled.h1`
  color: #fff;
`;

const TitleGrid = styled.div`
  width: 120px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

const ContentsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0px;
`;

const Input = styled.input`
  width: 60%;
  border: none;
  height: 25px;
  border-radius: 7px;
  padding: 5px;
`;

const Textarea = styled.textarea`
  width: 60%;
  height: 70px;
  border: none;
  border-radius: 7px;
  padding: 5px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  font-size: 20px;
  color: #fff;
  background-color: #608d9b;
  margin: auto;
  border: none;
  border-radius: 7px;
  font-weight: bold;
`;
