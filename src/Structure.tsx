// import React from 'react'
// import FirstPage from "./FirstPage";
import Header from "./Header";

import { Outlet } from "react-router-dom";

export default function Structure() {
  return (
    <main>
      <Header />
      <Outlet />
      {/* <FirstPage /> */}
    </main>
  );
}
