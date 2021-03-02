import React from "react";
// import Navigation from "./Navigation";

//icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../img/azul_bola.png";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function Navbar({ searchInp, setSearchInp }) {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    try {
      await logOut();
      history.push("../../landingPages/Login.js");
    } catch {}
  }
  const inputHandler = (e) => {
    setSearchInp(e.target.value);
    if (e.target.value === "") {
      history.push(`/`);
    }
    setTimeout(function () {
      if (e.target.value !== "") {
        history.push(`/search/${e.target.value}`);
      }
    }, 1500);
  };
  const openPage = () => {
    history.push(`/`);
  };
  return (
    <nav className="sideNav">
      <section className="topInfo">
        <img src={Logo} alt="logo" onClick={openPage} />
        {/* <div className="userInfo">
          <AccountCircleIcon />
          <h1>{currentUser.email}</h1>
        </div> */}
        <div className="conteudoTop">
          <div className="searchInput">
            <label>
              <span>
                <SearchIcon color="disabled" fontSize="default" />
              </span>
              <input
                placeholder="Search"
                onChange={inputHandler}
                value={searchInp}
              ></input>
            </label>
          </div>
        </div>
      </section>

      <section className="center">
        <div className="nameIcons" onClick={openPage}>
          <HomeIcon />
          <h1>Home</h1>
        </div>

        <div className="nameIconsDesativos">
          <MusicNoteIcon />
          <h1>Liked Songs</h1>
        </div>

        <div className="nameIconsDesativos">
          <QueueMusicIcon />
          <h1>Playlists</h1>
        </div>

        <div className="userPlaylist">
          <h1>Ferias 2019</h1>
        </div>
        <div className="userPlaylist">
          <h1>Best Rap 2020</h1>
        </div>
        <div className="userPlaylist">
          <h1>Funk Do baile</h1>
        </div>

        {/* <div className="nameIcons">
          <SearchIcon />
          <h1>Browse</h1>
        </div> */}
      </section>

      <section className="bottomInfo">
        <div className="logout" onClick={handleLogout}>
          <ExitToAppIcon />
          <h1>Log Out</h1>
        </div>
        <div className="loginUser">
          <p className="loginEmail">{currentUser.email}</p>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
