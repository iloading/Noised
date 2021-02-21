import React, { useEffect } from "react";
//COMPONENTS
import Carousel from "../components/Carousel";
import Preview from "../components/Previews/Preview";
//REDUX PEDIDO À API
import { useDispatch, useSelector } from "react-redux";
import { loadHome } from "../actions/homeAction";
//ROUTER
import { useLocation } from "react-router-dom";
//FRAMER MOTION
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function Home() {
  //Pedido à API w/ REDUX assim que a HOME carrega
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadHome());
    dispatch(loadHome());
  }, [dispatch]);

  //CONSULTAR O QUE ESTÁ NO STATE (REDUX)
  const { topPlaylists, topAlbums, topArtists, topPodcasts } = useSelector(
    (state) => state.home
  );
  //ROUTER
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  return (
    <div className="home main-conteudo">
      <h1 className="PageName">HOME</h1>
      {topPlaylists && (
        <>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{pathID && <Preview />}</AnimatePresence>
            <Carousel
              data={topPlaylists}
              titulo="Top Playlists"
              type="playlist"
            />
            <Carousel data={topAlbums} titulo="Top Albums" type="album" />
            <Carousel data={topArtists} titulo="Top Artists" type="artist" />
            <Carousel data={topPodcasts} titulo="Top Podcasts" type="podcast" />
          </AnimateSharedLayout>
        </>
      )}
    </div>
  );
}

export default Home;
