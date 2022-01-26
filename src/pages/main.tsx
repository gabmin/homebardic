import * as React from "react";
import { useState } from "react";
import Header from "../components/header";
import Contents from "../components/contents";
import Jin from "../components/jin";

const Main = () => {
  const [base, setBase] = useState("진");
  return (
    <>
      <Header />
      <Contents />
      {base === "진" ? <Jin /> : null}
    </>
  );
};

export default Main;
