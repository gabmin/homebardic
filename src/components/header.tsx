import * as React from "react";
import { useState } from "react";
import Modal from "../components/modal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectedModal } from "../redux/reducers/modal";
import styled from "styled-components";
import logo from "../images/logo.png";

const Header = () => {
  const dispatch = useAppDispatch();
  const { modalState } = useAppSelector((state) => state.modal);
  const openModal = () => {
    dispatch(selectedModal(true));
  };
  return (
    <Container>
      <ImageGrid>
        <Image src={logo} />
      </ImageGrid>
      <WriteBtn onClick={openModal}>작성하기</WriteBtn>
      {modalState ? <Modal /> : null}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #245079;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;

const ImageGrid = styled.div`
  text-align: center;
`;

const WriteBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 15px;
  color: #fff;
  background-color: #70aabb;
  border: none;
  border-radius: 10px;
  position: absolute;
  top: 60px;
  right: 60px;
`;
