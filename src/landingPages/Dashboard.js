import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
//ROUTER
import { Route, Switch } from "react-router-dom";
//COMPONENTS
import Playlist from "../pages/Playlist";
function Dashboard() {
  return (
    <>
      <main className="main">
        <Navbar />
        <Switch>
          <Route path="/playlist/:id">
            <Playlist />
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
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Dashboard;
