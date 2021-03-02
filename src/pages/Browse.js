import React, { useEffect } from "react";
//COMPONENTS
import Carousel from "../components/Carousel";

//REDUX PEDIDO À API
import { useDispatch, useSelector } from "react-redux";
import { searchInfo } from "../actions/searchAction";
import loading from "../img/loading.gif";
//ROUTER
import { useLocation } from "react-router-dom";
//FRAMER MOTION
import { AnimateSharedLayout } from "framer-motion";
//COMPONENTES
import ArtistTrack from "./ArtistTrack";
function Browse() {
  //CONSULTAR O QUE ESTÁ NO STATE (REDUX)
  const { playlists, albums, artists, isLoading } = useSelector(
    (state) => state.search
  );

  //ROUTER
  const location = useLocation();
  const searchInput = location.pathname.split("/")[2];

  //Pedido à API w/ REDUX assim que a SEARCH carrega
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadHome());
    dispatch(searchInfo(searchInput));
  }, [dispatch, searchInput]);

  return (
    <div className="home main-conteudo">
      {/* <div className="loginUser">
        <AccountCircleIcon />
        <p className="loginEmail">{currentUser.email}</p>
      </div> */}

      <div className="topPageLoading">
        <h1>
          SEARCH {isLoading && <img src={loading} alt="loading-gif"></img>}
        </h1>
      </div>

      {!isLoading && (
        <>
          <AnimateSharedLayout type="crossfade">
            {/* <AnimatePresence>
              {searchInput && <Preview searchInput={searchInput} />}
            </AnimatePresence> */}
            <Carousel data={playlists} titulo="Playlists" type="playlist" />
            <Carousel data={albums} titulo="Albums" type="album" />
            <Carousel data={artists} titulo="Artists" type="artist" />
            {/* <Carousel data={topPodcasts} titulo="Top Podcasts" type="podcast" /> */}
          </AnimateSharedLayout>
        </>
      )}
    </div>
  );
}

export default Browse;
