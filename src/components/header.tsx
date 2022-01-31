import * as React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import Modal from "../components/modal";
import { selectedModal } from "../redux/reducers/modal";
import styled from "styled-components";
import logo from "../images/logo.png";

const Header = () => {
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const admin = cookies.get("token");
  const { modalState } = useAppSelector((state) => state.modal);

  const openModal = () => {
    dispatch(selectedModal(true));
  };

  return (
    <Container>
      <ImageGrid>
        <Image src={logo} />
      </ImageGrid>
      <LinkGrid>
        {admin === undefined ? <Link to="/login">admin</Link> : null}
      </LinkGrid>
      {admin !== undefined ? (
        <WriteBtn onClick={openModal}>작성하기</WriteBtn>
      ) : null}
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

const LinkGrid = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
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
  cursor: pointer;
`;
