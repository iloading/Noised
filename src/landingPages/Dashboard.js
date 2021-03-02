import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
//ROUTER
import { Route, Switch } from "react-router-dom";
//COMPONENTS
import Playlist from "../pages/Playlist";
import Album from "../pages/Album";
import Artist from "../pages/Artist";
import Browse from "../pages/Browse";
import Player from "../components/Player";

function Dashboard() {
  const [searchInp, setSearchInp] = useState("");

  return (
    <>
      <main className="main">
        <Navbar searchInp={searchInp} setSearchInp={setSearchInp} />

        <Switch>
          <Route path={"/playlist/:id"}>
            <Playlist />
          </Route>
          <Route path={"/album/:id"}>
            <Album />
          </Route>
          <Route path={"/artist/:id"}>
            <Artist />
          </Route>
          <Route
            path={[
              "/search/playlist_prev/:id",
              "/search/album_prev/:id",
              "/search/artist_prev/:id",
              "/search/podcast_prev/:id",
              "/search/:id",
            ]}
          >
            <Browse />
          </Route>
          <Route
            exact
            path={[
              "/home/playlist_prev/:id",
              "/home/album_prev/:id",
              "/home/artist_prev/:id",
              "/home/podcast_prev/:id",
              "/",
            ]}
          >
            <Home setSearchInp={setSearchInp} />
          </Route>
        </Switch>

        <Player />
      </main>
    </>
  );
}

export default Dashboard;

// [
//   "/playlist_prev/:id",
//   "/album_prev/:id",
//   "/artist_prev/:id",
//   "/podcast_prev/:id",
//   "/",
// ];
