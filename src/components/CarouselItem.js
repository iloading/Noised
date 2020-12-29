import React from "react";
import PlayCircleFilledTwoToneIcon from "@material-ui/icons/PlayCircleFilledTwoTone";
//REDUX
import { useDispatch } from "react-redux";
import loadPlaylist from "../actions/playlistAction";
//ROUTER
import { Link, useHistory } from "react-router-dom";
//FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion";
//UTIL
import { chooseURL } from "../utility/URLchoice";

function CarouselItem({ item, id, type }) {
  //Mudar de página
  const history = useHistory();
  const openPage = () => {
    const tipoPagina = type.split("_")[1];
    console.log(tipoPagina);
    history.push(`/${tipoPagina}/${id}`);
  };
  //RENDERIZAR PREVIEW
  const dispatch = useDispatch();
  const loadPlaylistHandler = (e) => {
    const elemento = e.target;

    //Apenas ativa se se clicar na parte cinzenta (excuindo assim o botão PLAY)
    if (elemento.classList.contains("background-shadow")) {
      let screenX = elemento.getBoundingClientRect().x;
      let screenY = elemento.getBoundingClientRect().y;
      dispatch(loadPlaylist(id, type, screenX, screenY));
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
              <PlayCircleFilledTwoToneIcon fontSize="large" />
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
