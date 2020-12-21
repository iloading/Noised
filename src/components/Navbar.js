import React from "react";
import Navigation from "./Navigation";

function Navbar() {
  return (
    <nav className="sideNav">
      <section className="forApp">
        <h1>Navegação</h1>
        <ul>
          <li>Navegação</li>
        </ul>
      </section>
      <section className="forUser">
        <h1>Library</h1>
        <ul>
          <li>Library</li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
