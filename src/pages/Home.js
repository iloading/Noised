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
    <div className="home">
      {topPlaylists && (
        <>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{pathID && <Preview />}</AnimatePresence>
            <Carousel
              data={topPlaylists}
              titulo="Top Playlists"
              type="_playlist"
            />
            <Carousel data={topAlbums} titulo="Top Albums" type="_album" />
            <Carousel data={topArtists} titulo="Top Artists" type="_artist" />
            <Carousel
              data={topPodcasts}
              titulo="Top Podcasts"
              type="_podcast"
            />
          </AnimateSharedLayout>
        </>
      )}
    </div>
  );
}

export default Home;