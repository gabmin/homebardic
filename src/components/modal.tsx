import * as React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { selectedModal } from "../redux/reducers/modal";

const Modal = () => {
  const dispatch = useAppDispatch();
  const closeBtn = () => {
    dispatch(selectedModal(false));
  };
  return (
    <Background onClick={closeBtn}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={closeBtn}>X</CloseBtn>
        <h1>칵테일 레시피 추가하기</h1>
        <Container>
          <ContentsGrid>
            <TitleGrid>칵테일 이름</TitleGrid>
            <Input type="text"></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>기주</TitleGrid>
            <div>
              <Dropdown name="base">
                <option value="jin">진</option>
                <option value="vodka">보드카</option>
                <option value="rum">럼</option>
                <option value="whiskey">위스키</option>
                <option value="tequila">데킬라</option>
                <option value="brandy">브랜디</option>
                <option value="liqueur">리큐어</option>
                <option value="others">기타</option>
              </Dropdown>
              용량 : <input></input>
            </div>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>재료</TitleGrid>
            <Input type="text"></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>기법</TitleGrid>
            <Input type="text"></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>글라스</TitleGrid>
            <Input type="text"></Input>
          </ContentsGrid>
          <ContentsGrid>
            <TitleGrid>설명</TitleGrid>
            <textarea></textarea>
          </ContentsGrid>
        </Container>
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
  z-index: 0;
`;
const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 80%;
  padding: 16px;
  background: #515c81;
  border-radius: 10px;
  opacity: 1;
  text-align: center;
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
  background-color: red;
  margin: 50px auto;
  display: inline-block;
`;

const TitleGrid = styled.div`
  width: 120px;
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

const ContentsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0px;
`;

const Input = styled.input`
  width: 200px;
`;

const Dropdown = styled.select`
  width: 100px;
`;
