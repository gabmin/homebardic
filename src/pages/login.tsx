import * as React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import api from "../shared/axios";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onChangeId = useCallback((e) => {
    e.preventDefault;
    setId(e.currentTarget.value);
  }, []);

  const onChangePwd = useCallback((e) => {
    e.preventDefault;
    setPwd(e.currentTarget.value);
  }, []);

  const login = () => {
    const data = { id: id, password: pwd };
    api.post("/login", data);
  };
  // const onClickbtn = () => {
  //   api.post("/signin");
  // };
  return (
    <Container>
      <LoginBox>
        <Title>관리자 로그인</Title>
        <Id>
          <Tag> 아이디 :</Tag>
          <Input value={id} onChange={onChangeId}></Input>
        </Id>
        <Password>
          <Tag> 비밀번호 :</Tag>
          <Input type="password" value={pwd} onChange={onChangePwd}></Input>
        </Password>
        <Button onClick={login}>로그인</Button>
        {/* <button onClick={onClickbtn}>회원가입</button> */}
      </LoginBox>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #70aabb;
`;

const LoginBox = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #245079;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  background-color: #245079;
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
`;

const Id = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
`;

const Password = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
`;

const Tag = styled.div`
  color: #fff;
  margin: 0px 10px 0px 0px;
`;

const Input = styled.input`
  border: none;
  height: 25px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  display: block;
  margin: auto;
  background-color: #70aabb;
  border: none;
  border-radius: 10px;
  color: #fff;
`;
