import React, { useEffect } from "react";
//COMPONENTS
import Carousel from "../components/Carousel";
import PlaylistPreview from "../components/PlaylistPreview";
//REDUX PEDIDO À API
import { useDispatch, useSelector } from "react-redux";
import { loadHome } from "../actions/homeAction";

function Home() {
  //Pedido à API assim que a HOME carrega
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHome());
  }, [dispatch]);

  const { topPlaylists, topAlbums, topArtists, topPodcasts } = useSelector(
    (state) => state.home
  );

  return (
    <div className="home">
      {topPlaylists && (
        <>
          <PlaylistPreview />
          <Carousel data={topPlaylists} titulo="Top Playlists" />
          <Carousel data={topAlbums} titulo="Top Albums" />
          <Carousel data={topArtists} titulo="Top Artists" />
          <Carousel data={topPodcasts} titulo="Top Podcasts" />
        </>
      )}
    </div>
  );
}

export default Home;
