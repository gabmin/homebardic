import * as React from "react";
import { useEffect } from "react";
import { CocktailDB } from "../redux/actions/cocktailActions";
import { useAppDispatch } from "../redux/hooks";
import Header from "../components/header";
import Contents from "../components/contents";
import Card from "../components/card";
import Jin from "../components/jin";

const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(CocktailDB());
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
