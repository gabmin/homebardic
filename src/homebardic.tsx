import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import Login from "./pages/login";

const HomeBarDic = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomeBarDic;
