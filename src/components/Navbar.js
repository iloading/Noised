import React from "react";
// import Navigation from "./Navigation";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
  return (
    <nav className="sideNav">
      <div className="navContentWidth">
        <div className="forAppIcons">
          <HomeIcon />
          <h1>Home</h1>
        </div>
        <div className="forAppIcons">
          <SearchIcon />
          <h1>Browse</h1>
        </div>
        <div className="forUser">
          <p>Your Library</p>
          <h1>Songs</h1>
          <h1>Albums</h1>
          <h1>Artists</h1>
          <h1>Playlists</h1>
        </div>
        <div className="forUserPlaylists">
          <p>Your playlists</p>
          <h1>Very nice Pop</h1>
          <h1>Funk Boy</h1>
          <h1>Rock Albino</h1>
          <h1>Latino HITS</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
