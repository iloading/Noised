import React from "react";
// import Navigation from "./Navigation";

function Navbar() {
  return (
    <nav className="sideNav">
      <section className="forApp">
        <h1>HOME</h1>
        <h1>BROWSE</h1>
      </section>
      <section className="forUser">
        <h1>MUSICAS</h1>
        <h1>PLAYLIST</h1>
      </section>
    </nav>
  );
}

export default Navbar;
