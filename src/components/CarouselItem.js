import React from "react";
import PlayCircleFilledTwoToneIcon from "@material-ui/icons/PlayCircleFilledTwoTone";
//REDUX
import { useDispatch } from "react-redux";
import loadPlaylist from "../actions/playlistAction";

function CarouselItem({ item, id }) {
  const dispatch = useDispatch();

  const loadPlaylistHandler = (e) => {
    console.log(e);
    let screenX = e.clientX;
    let screenY = e.clientY;
    console.log(screenX, screenY);
    dispatch(loadPlaylist(id, screenX, screenY));
  };
  return (
    <>
      <div className="carrossel-item">
        <section>
          <img
            //As imagens vêm com diferentes nomes na API picture ou cover
            src={item.picture_medium || item.cover_medium}
            className={item.title ? "item-foto" : "artist-foto"}
            alt={item.title}
          />
          <div
            onClick={loadPlaylistHandler}
            className={`middle ${item.name ? "artist-middle" : ""}`}
          >
            <PlayCircleFilledTwoToneIcon fontSize="large" />
          </div>
        </section>

        <p className={`itemName ${item.name ? "artistName" : ""}`}>
          <span>{item.title || item.name}</span>
        </p>
      </div>
    </>
  );
}

export default CarouselItem;
