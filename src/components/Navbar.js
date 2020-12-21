import React from "react";
import Navigation from "./Navigation";

function Navbar() {
  return (
    <div className="sideNav">
      <section className="forApp">
        <span>Navegação</span>
        <span>Hit Me</span>
      </section>
      <section className="forUser">
        <span>Library</span>
        <span>Albums</span>
      </section>
    </div>
  );
}

export default Navbar;
