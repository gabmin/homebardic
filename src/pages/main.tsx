import * as React from "react";
import { useEffect } from "react";
import {
  CocktailDB,
  JinDB,
  VodkaDB,
  RumDB,
  WhiskeyDB,
  TequilaDB,
  BrandyDB,
  LiqueurDB,
  OthersDB,
} from "../redux/actions/cocktailActions";
import { useAppDispatch } from "../redux/hooks";
import Header from "../components/header";
import Contents from "../components/contents";
import Card from "../components/card";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(CocktailDB());
    dispatch(JinDB());
    dispatch(VodkaDB());
    dispatch(RumDB());
    dispatch(WhiskeyDB());
    dispatch(TequilaDB());
    dispatch(BrandyDB());
    dispatch(LiqueurDB());
    dispatch(OthersDB());
  }, []);
  return (
    <>
      <Link to="/login">로그인</Link>
      <Header />
      <Contents />
      <Card />
    </>
  );
};

export default Main;
