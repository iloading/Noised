import React, { useRef } from "react";

//ICONS
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import loadQueue from "../../actions/queueAction";
import setCurrentTrack from "../../actions/currentTrackAction";
//UTIL
import getTime from "../../utility/getTime";

function MusicaNaTabela({ chart, previewData }) {
  const dispatch = useDispatch();

  const btn_pause = useRef();
  const button_play = useRef();
  const { tracks, currentQueue } = useSelector((state) => state.queue);
  const { currentTrack, isPlaying, play_pause } = useSelector(
    (state) => state.currentTrack
  );

  //CLIQUE NUMA MÚSICA DENTRO DA PREVIEW
  const playSelectedSong = async (e, action) => {
    if (action === "play") {
      if (currentQueue !== previewData.id) {
        await dispatch(loadQueue(previewData.id, previewData.type));

        button_play.current.click();
      } else {
        //e agora selecionamos a currentTrack para começar a tocar
        let playSong = tracks.find((elm) => elm.id === chart.id);

        dispatch(
          setCurrentTrack(
            playSong,
            previewData.cover_small || playSong.album.cover_small,
            previewData.type
          )
        );
        play_pause(action);
      }
    } else {
      play_pause(action);
    }
  };

  return (
    <tr
      key={chart.id}
      className={`${
        currentTrack && currentTrack.id === chart.id
          ? "musica-playing-background"
          : ""
      }`}
    >
      <td>
        <span className="play-btn">
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
        </span>
        {/* <span></span>
                          <FavoriteBorderIcon />
                        </span> */}

        <span className={`musica `}>
          <p
            className={`musica-title ${
              currentTrack && currentTrack.id === chart.id && isPlaying
                ? "musica-playing"
                : ""
            }`}
          >
            {chart.title}
          </p>
          <p className="musica-artist">{chart.artist.name}</p>
        </span>
      </td>
      <td className="duration">{getTime(chart.duration)}</td>
    </tr>
  );
}

export default MusicaNaTabela;
