import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
//ROUTER
import { Route, Switch } from "react-router-dom";
//COMPONENTS
import Playlist from "../pages/Playlist";
import Album from "../pages/Album";
import Artist from "../pages/Artist";
import Player from "../components/Player";

function Dashboard() {
  const audioRef = useRef(null);
  return (
    <>
      <main className="main">
        <Navbar />

        <Switch>
          <Route path={"/playlist/:id"}>
            <Playlist audioRef={audioRef} />
          </Route>
          <Route path={"/album/:id"}>
            <Album audioRef={audioRef} />
          </Route>
          <Route path={"/artist/:id"}>
            <Artist audioRef={audioRef} />
          </Route>
          <Route
            exact
            path={[
              "/playlist_prev/:id",
              "/album_prev/:id",
              "/artist_prev/:id",
              "/podcast_prev/:id",
              "/",
            ]}
          >
            <Home audioRef={audioRef} />
          </Route>
        </Switch>

        <Player audioRef={audioRef} />
      </main>
    </>
  );
}

export default Dashboard;
