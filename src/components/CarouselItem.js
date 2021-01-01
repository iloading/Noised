import React from "react";
import PlayCircleFilledTwoToneIcon from "@material-ui/icons/PlayCircleFilledTwoTone";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import loadPlaylist from "../actions/playlistAction";
import loadTracks from "../actions/tracksAction";

//ROUTER
import { Link, useHistory } from "react-router-dom";
//FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion";
//UTIL
import { chooseURL } from "../utility/URLchoice";

function CarouselItem({ item, id, type }) {
  //Mudar de página
  const dispatch = useDispatch();
  const { currentQueue, isLoading } = useSelector((state) => state.tracks);
  const { currentTrack, isPlaying, play_pause } = useSelector(
    (state) => state.currentTrack
  );

  const history = useHistory();

  const openPage = () => {
    //Mudar o state "isLoading" para true, para fazer com que a nova página espere que os resultados da API cheguem e só depois renderizar a pág em si
    dispatch({ type: "LOADING_PLAYLIST" });
    const tipoPagina = type.split("_")[1];
    history.push(`/${tipoPagina}/${id}`);
  };
  //RENDERIZAR PREVIEW
  const loadPlaylistHandler = (e) => {
    const elemento = e.target;

    //Apenas ativa se se clicar na parte cinzenta (excuindo assim o botão PLAY)
    if (elemento.classList.contains("background-shadow")) {
      let screenX = elemento.getBoundingClientRect().x;
      let screenY = elemento.getBoundingClientRect().y;
      dispatch(loadPlaylist(id, type, screenX, screenY));
    }
  };

  //CLIQUE NO BOTÃO PLAY
  const setTracksHandler = async (e) => {
    let action = e;
    if (currentQueue !== id) {
      await dispatch(loadTracks(id, type));
      play_pause(action);
    } else {
      play_pause(action);
    }
  };

  //URL diferente consoante o tipo de media
  let prevURL = chooseURL(type, id);

  return (
    <>
      <AnimatePresence>
        <motion.div className="carrossel-item" layoutId={id}>
          <motion.section>
            <motion.img
              //As imagens vêm com diferentes nomes na API "picture" ou "cover"
              src={item.picture_medium || item.cover_medium}
              className={item.title ? "item-foto" : "artist-foto"}
              alt={item.title}
              layoutId={`image ${id}`}
            />
            <Link to={prevURL}>
              <div
                className={`background-shadow  ${
                  item.name ? `background-shadow-artist` : ""
                } ${type}`}
                onClick={loadPlaylistHandler}
              ></div>
            </Link>
            <div className={`middle ${item.name ? "artist-middle" : ""}`}>
              {currentQueue === id && isPlaying ? (
                <PauseCircleOutlineIcon
                  fontSize="large"
                  onClick={(e) => setTracksHandler("pause")}
                />
              ) : (
                <PlayCircleFilledTwoToneIcon
                  fontSize="large"
                  onClick={(e) => setTracksHandler("play")}
                />
              )}
            </div>
          </motion.section>

          <motion.p
            layoutId={`nome ${id}`}
            className={`itemName ${item.name ? "artistName" : ""}`}
          >
            <span onClick={openPage}>{item.title || item.name}</span>

            {item.artist && (
              <span className="album-artistName">{item.artist.name}</span>
            )}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default CarouselItem;
