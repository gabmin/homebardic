import * as React from "react";
import Cocktails from "../components/cocktails";
import Header from "../components/header";
import Contents from "../components/contents";

const Main = () => {
  return (
    <>
      <Header />
      <Contents />
      <Cocktails />
    </>
  );
};

export default Main;
