import * as React from "react";
import { useEffect } from "react";
import { CocktailDB, VodkaDB } from "../redux/actions/cocktailActions";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Header from "../components/header";
import Contents from "../components/contents";
import Card from "../components/card";

const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(CocktailDB());
    dispatch(VodkaDB());
  }, []);
  return (
    <>
      <Header />
      <Contents />
      <Card />
    </>
  );
};

export default Main;
