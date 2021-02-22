import React, { useEffect, useRef } from "react";
import PlayCircleFilledTwoToneIcon from "@material-ui/icons/PlayCircleFilledTwoTone";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  loadPlaylist,
  loadAlbum,
  loadArtist,
} from "../actions/mediaDataAction";
import loadQueue from "../actions/queueAction";
import setCurrentTrack from "../actions/currentTrackAction";

//ROUTER
import { Link, useHistory } from "react-router-dom";
//FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion";
//UTIL
import { chooseURL } from "../utility/URLchoice";

function CarouselItem({ item, id, type }) {
  //Mudar de página
  const dispatch = useDispatch();
  const btn_play = useRef();
  const btn_pause = useRef();
  const { tracks, currentQueue, isLoading } = useSelector(
    (state) => state.queue
  );
  const { currentTrack, isPlaying, play_pause } = useSelector(
    (state) => state.currentTrack
  );

  const history = useHistory();

  const openPage = () => {
    //Mudar o state "isLoading" para true, para fazer com que a nova página espere que os resultados da API cheguem e só depois renderizar a pág em si
    dispatch({ type: "LOADING_PREVIEW" });
    const tipoPagina = type;
    history.push(`/${tipoPagina}/${id}`);
  };
  //RENDERIZAR PREVIEW
  const loadPlaylistHandler = (e) => {
    const elemento = e.target;

    //Apenas ativa se se clicar na parte cinzenta (excuindo assim o botão PLAY)
    if (elemento.classList.contains("background-shadow")) {
      let screenX = elemento.getBoundingClientRect().x;
      let screenY = elemento.getBoundingClientRect().y;
      switch (type) {
        case "playlist":
          dispatch(loadPlaylist(id, screenX, screenY));
          break;
        case "album":
          dispatch(loadAlbum(id, screenX, screenY));
          break;
        case "artist":
          dispatch(loadArtist(id, screenX, screenY));
          break;

        default:
          break;
      }
    }
  };

  //CLIQUE NO BOTÃO PLAY
  const setQueueHandler = async (e, action) => {
    //PS: Passei 18h nesta função ... I'm ok though
    //Quando se clica no play de uma nova playlist/album/artista
    if (action === "play") {
      if (currentQueue !== id) {
        //mudamos a queue

        await dispatch(loadQueue(id, type));

        btn_play.current.click();

        //depois de simularmos o click, a função corre novamente e desta vez entra no else
      } else {
        //e agora selecionamos a currentTrack para começar a tocar
        //Se for um album precisamos da fotografia do mesmo para dar display
        if (type === "album") {
          dispatch(setCurrentTrack(tracks[0], item.cover_small, type));
          //Se for uma playlist, não precisamos pq a musica em si já traz a foto da API
        } else {
          dispatch(setCurrentTrack(tracks[0], null, type));
        }

        play_pause(action);
      }
    } else {
      play_pause(action);
    }

    // console.log(tracks);
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
              style={currentQueue === id ? { opacity: "0.4" } : {}}
            />
            <Link to={prevURL}>
              <div
                className={`background-shadow  ${
                  item.name ? `background-shadow-artist` : ""
                } _${type}`}
                onClick={loadPlaylistHandler}
                style={currentQueue === id ? { opacity: "0.8" } : {}}
              ></div>
            </Link>
            <div
              style={currentQueue === id ? { opacity: "1" } : {}}
              className={`middle ${item.name ? "artist-middle" : ""}`}
            >
              {currentQueue === id && isPlaying ? (
                <PauseCircleOutlineIcon
                  fontSize="large"
                  onClick={(e) => setQueueHandler(e, "pause")}
                />
              ) : (
                <PlayCircleFilledTwoToneIcon
                  fontSize="large"
                  onClick={(e) => setQueueHandler(e, "play")}
                />
              )}
              <div
                className=""
                ref={btn_play}
                onClick={(e) => setQueueHandler(e, "play")}
              ></div>
              <div
                className=""
                ref={btn_pause}
                onClick={(e) => setQueueHandler(e, "pause")}
              ></div>
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
