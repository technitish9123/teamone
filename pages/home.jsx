import React from "react";
import Nav from "../Components/Nav";

import Dashboard from "./dashboard";

const home = () => {
  return (
    <div className="main h-full w-full ">
      <Nav />

      <Dashboard />
    </div>
  );
};

export default home;
