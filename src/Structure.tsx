// import React from 'react'
import Header from "./Header";

import { Outlet } from "react-router-dom";

export default function Structure() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
