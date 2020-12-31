import React, { useRef, useEffect } from "react";
//ICONS
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import ShuffleIcon from "@material-ui/icons/Shuffle";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { Controlo } from "../actions/currentTrackAction";
import { play, pause } from "../actions/play_pause";
function Player() {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const { currentTrack, isPlaying } = useSelector(
    (state) => state.currentTrack
  );

  const playSongHandler = () => {
    if (isPlaying) {
      dispatch(pause());
      audioRef.current.pause();
    } else {
      dispatch(play());
      audioRef.current.play();
    }
  };

  useEffect(() => {
    dispatch(Controlo(playSongHandler));
  }, [dispatch]);

  // currentTrack && playSongHandler();

  return (
    <div className="player">
      <div className="player-playingNow">
        <img src="" alt="" />
        <p>Title</p>
        <p>Artist</p>
      </div>

      <div className="player-content">
        <div className="play-control">
          <SkipPreviousIcon className="skip-back" />
          {isPlaying ? (
            <PauseCircleOutlineIcon
              className="pause"
              onClick={playSongHandler}
            />
          ) : (
            <PlayCircleOutlineIcon className="play" onClick={playSongHandler} />
          )}

          <SkipNextIcon className="skip-forward" />
        </div>
        <div className="time-control">
          <p>1:34</p>
          <input type="range" />
          <p>5:23</p>
        </div>
      </div>

      <div>
        <VolumeUpIcon />
        <ShuffleIcon />
      </div>

      {/* <div className="player-content">
        <div className="play-control">
          <SkipPreviousIcon className="skip-back" />
          <PlayCircleOutlineIcon className="play" />
          <PauseCircleOutlineIcon className="pause" />
          <SkipNextIcon className="skip-forward" />
        </div>
        <div className="time-control">
          <p>1:34</p>
          <input type="range" />
          <p>5:23</p>
        </div>
      </div>

      <div className="player-info">
        <p>Tes</p>
        <pp>Teste</pp>
      </div> */}

      <audio src={currentTrack && currentTrack.preview} ref={audioRef}></audio>
    </div>
  );
}

export default Player;
