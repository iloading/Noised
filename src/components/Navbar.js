import React from "react";
// import Navigation from "./Navigation";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../img/logo.png";

import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function Navbar() {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    try {
      await logOut();
      history.push("../../landingPages/Login.js");
    } catch {}
  }
  return (
    <nav className="sideNav">
      <section className="topInfo">
        <img src={Logo} />
        {/* <div className="userInfo">
          <AccountCircleIcon />
          <h1>{currentUser.email}</h1>
        </div> */}
      </section>

      <section className="center">
        <div className="nameIcons">
          <HomeIcon />
          <h1>Home</h1>
        </div>

        <div className="nameIcons">
          <SearchIcon />
          <h1>Browse</h1>
        </div>
      </section>

      <section className="bottomInfo">
        <div className="logout" onClick={handleLogout}>
          <ExitToAppIcon />
          <h1>Log Out</h1>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
