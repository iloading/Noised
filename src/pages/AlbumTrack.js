import React, { useRef } from "react";

//ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import loadQueue from "../actions/queueAction";
import setCurrentTrack from "../actions/currentTrackAction";
import { shuffleArray } from "../utility/shuffleTracks";
//UTIL
import getTime from "../utility/getTime";

function AlbumTrack({ chart, previewData }) {
  const dispatch = useDispatch();

  const btn_pause = useRef();
  const button_play = useRef();
  const { tracks, currentQueue } = useSelector((state) => state.queue);
  const { currentTrack, isPlaying, play_pause } = useSelector(
    (state) => state.currentTrack
  );
  const { shuffle } = useSelector((state) => state.settings);

  //CLIQUE NUMA MÚSICA DENTRO DA PREVIEW
  const playSelectedSong = async (e, action) => {
    if (action === "play") {
      if (currentQueue !== previewData.id) {
        await dispatch(loadQueue(previewData.id, previewData.type));

        button_play.current.click();
      } else {
        if (shuffle === true) {
          dispatch(shuffleArray(tracks));
        }
        //e agora selecionamos a currentTrack para começar a tocar
        let playSong = tracks.find((elm) => elm.id === chart.id);

        dispatch(
          setCurrentTrack(playSong, previewData.cover_small, previewData.type)
        );
        play_pause(action);
      }
    } else {
      play_pause(action);
    }
  };

  return (
    <tr
      className={`album-tr ${
        currentTrack && currentTrack.id === chart.id
          ? "musica-playing-background"
          : ""
      }`}
      style={{}}
    >
      <td className="play-btn">
        {currentTrack && currentTrack.id === chart.id && isPlaying ? (
          <div ref={btn_pause} onClick={(e) => playSelectedSong(e, "pause")}>
            <PauseCircleOutlineIcon
              style={{ fontSize: 30, color: "#47cafb" }}
            />
          </div>
        ) : (
          <div ref={button_play} onClick={(e) => playSelectedSong(e, "play")}>
            <PlayCircleFilledWhiteIcon style={{ fontSize: 30 }} />
          </div>
        )}
      </td>
      <td className="favorite-btn">
        <FavoriteBorderIcon />
      </td>

      <td className={`music-title musica`}>
        <p
          className={`musica-title ${
            currentTrack && currentTrack.id === chart.id && isPlaying
              ? "musica-playing"
              : ""
          }`}
        >
          {chart.title}
        </p>
      </td>

      <td className="music-duration">{getTime(chart.duration)}</td>
    </tr>
  );
}

export default AlbumTrack;
