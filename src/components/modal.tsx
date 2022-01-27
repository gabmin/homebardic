import * as React from "react";
import styled from "styled-components";

const Modal = () => {
  return (
    <Background>
      <ModalContainer>
        <h1>칵테일 레시피 추가하기</h1>
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
