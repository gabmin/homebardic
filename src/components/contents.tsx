import * as React from "react";
import { FunctionComponent, useState } from "react";
import { selectedBase } from "../redux/reducers/baseSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styled from "styled-components";

const Contents: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  // 보기 상태
  const { baseState } = useAppSelector((state) => state.base);
  const [base, setBase] = useState(baseState);

  const onClickBtn = (props: string) => () => {
    setBase(`${props}`);
    dispatch(selectedBase(props));
  };
  return (
    <Container>
      <ButtonGrid>
        <All base={base} type="button" onClick={onClickBtn("전체")}>
          전체
        </All>
        <Jin base={base} type="button" onClick={onClickBtn("진")}>
          진
        </Jin>
        <Vodka base={base} type="button" onClick={onClickBtn("보드카")}>
          보드카
        </Vodka>
        <Rum base={base} type="button" onClick={onClickBtn("럼")}>
          럼
        </Rum>
        <Whiskey base={base} type="button" onClick={onClickBtn("위스키")}>
          위스키
        </Whiskey>
        <Tequila base={base} type="button" onClick={onClickBtn("데킬라")}>
          데킬라
        </Tequila>
        <Brandy base={base} type="button" onClick={onClickBtn("브랜디")}>
          브랜디
        </Brandy>
        <Liqueur base={base} type="button" onClick={onClickBtn("리큐어")}>
          리큐어
        </Liqueur>
        <Others base={base} type="button" onClick={onClickBtn("기타")}>
          기타
        </Others>
      </ButtonGrid>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #245079;
`;

const ButtonGrid = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: auto;
`;

const All = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "전체" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) =>
    props.base === "전체" ? "15px" : "none"};
  border-top-right-radius: ${(props) =>
    props.base === "전체" ? "15px" : "none"};
  border: ${(props) => (props.base === "전체" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;
const Jin = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "진" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) => (props.base === "진" ? "15px" : "none")};
  border-top-right-radius: ${(props) =>
    props.base === "진" ? "15px" : "none"};
  border: ${(props) => (props.base === "진" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Vodka = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "보드카" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) =>
    props.base === "보드카" ? "15px" : "none"};
  border-top-right-radius: ${(props) =>
    props.base === "보드카" ? "15px" : "none"};
  border: ${(props) => (props.base === "보드카" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Rum = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "럼" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) => (props.base === "럼" ? "15px" : "none")};
  border-top-right-radius: ${(props) =>
    props.base === "럼" ? "15px" : "none"};
  border: ${(props) => (props.base === "럼" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Whiskey = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "위스키" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) =>
    props.base === "위스키" ? "15px" : "none"};
  border-top-right-radius: ${(props) =>
    props.base === "위스키" ? "15px" : "none"};
  border: ${(props) => (props.base === "위스키" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Tequila = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "데킬라" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) =>
    props.base === "데킬라" ? "15px" : "none"};
  border-top-right-radius: ${(props) =>
    props.base === "데킬라" ? "15px" : "none"};
  border: ${(props) => (props.base === "데킬라" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Brandy = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "브랜디" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) =>
    props.base === "브랜디" ? "15px" : "none"};
  border-top-right-radius: ${(props) =>
    props.base === "브랜디" ? "15px" : "none"};
  border: ${(props) => (props.base === "브랜디" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Liqueur = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "리큐어" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) =>
    props.base === "리큐어" ? "15px" : "none"};
  border-top-right-radius: ${(props) =>
    props.base === "리큐어" ? "15px" : "none"};
  border: ${(props) => (props.base === "리큐어" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Others = styled.button<{ base: string }>`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.base === "기타" ? "#70aabb" : "transparent"};
  border-top-left-radius: ${(props) =>
    props.base === "기타" ? "15px" : "none"};
  border-top-right-radius: ${(props) =>
    props.base === "기타" ? "15px" : "none"};
  border: ${(props) => (props.base === "기타" ? "1px #70aabb" : "none")};
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;
