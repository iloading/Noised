import React from "react";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";

function Dashboard() {
  return (
    <>
      <main className="main">
        <Navbar />
        <Home />
      </main>
    </>
  );
}

export default Dashboard;
