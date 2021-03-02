import React, { useRef, useEffect, useCallback, useState } from "react";
//ICONS
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

import ShuffleIcon from "@material-ui/icons/Shuffle";

import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { Controlo } from "../actions/currentTrackAction";
import { play, pause } from "../actions/play_pause";
import loadQueue from "../actions/queueAction";
//UTIL
import getTime from "../utility/getTime";
import { shuffleArray } from "../utility/shuffleTracks";
//REDUX
import setCurrentTrack from "../actions/currentTrackAction";
import {
  setVolume,
  toogleShuffle,
  toogleRepeat,
} from "../actions/settingsAction";

function Player() {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  //Temos que usar useState em vez de REDUX - Bug -> Enquanto a música tocava a preview abria e fechava sem parar, fazendo com que a aplicação bloqueasse
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  //Consultar a informação que está no State em REDUX
  const { currentTrack, isPlaying, trackAlbumPic } = useSelector(
    (state) => state.currentTrack
  );
  const { tracks, queueType, currentQueue } = useSelector(
    (state) => state.queue
  );
  const { volume, shuffle, repeat } = useSelector((state) => state.settings);

  //Play / Pause Logic
  const playSongHandler = useCallback(
    async (e) => {
      if (e === "pause") {
        await dispatch(pause());
        audioRef.current.pause();
      } else {
        await dispatch(play());
        //ERRO - consulta -> https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
        audioRef.current.play();
      }
    },
    [dispatch]
  );
  //Quando o componente carrega envia a função "playSongHandler" para o state. Assim, a habilidade de dar play e pause fica disponível em qualquer página na aplicação
  useEffect(() => {
    dispatch(Controlo(playSongHandler));
  }, [dispatch, playSongHandler]);

  //Lê o tempo do elemento "audio" e envia a informação para o state
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ currentTime: currentTime, duration: duration });
  };
  //Muda o currentTime da música quando mexemos no input
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  //Quando se muda de volume
  const volumeDragHandler = (e) => {
    audioRef.current.volume = e.target.value / 100;
    dispatch(setVolume(e.target.value / 100));
  };

  const skipTrackHandler = async (direction) => {
    //Try para quando se clicar no botão sem ter escolhido ainda uma queue
    try {
      let currentIndex = tracks.findIndex(
        (song) => song.id === currentTrack.id
      );
      //Ficou com código repetido por causa das fotos que não vêm formatadas com o mesmo nome da API e tivemos que acrescentar/repetir lógica para fazer essa distinção
      if (queueType === "album" || queueType === "artist") {
        if (direction === "skip-back") {
          if ((currentIndex - 1) % tracks.length === -1) {
            await dispatch(
              setCurrentTrack(
                tracks[tracks.length - 1],
                trackAlbumPic,
                queueType
              )
            );
            if (isPlaying) playSongHandler("play");
            return;
          }
          await dispatch(
            setCurrentTrack(
              tracks[(currentIndex - 1) % tracks.length],
              trackAlbumPic,
              queueType
            )
          );
        } else {
          await dispatch(
            setCurrentTrack(
              tracks[(currentIndex + 1) % tracks.length],
              trackAlbumPic,
              queueType
            )
          );
        }
      } else if (queueType === "playlist") {
        if (direction === "skip-back") {
          if ((currentIndex - 1) % tracks.length === -1) {
            await dispatch(
              setCurrentTrack(
                tracks[tracks.length - 1],
                tracks[tracks.length - 1].album.cover_small,
                queueType
              )
            );
            if (isPlaying) playSongHandler("play");
            return;
          }
          await dispatch(
            setCurrentTrack(
              tracks[(currentIndex - 1) % tracks.length],
              tracks[(currentIndex - 1) % tracks.length].album.cover_small,
              queueType
            )
          );
        } else {
          await dispatch(
            setCurrentTrack(
              tracks[(currentIndex + 1) % tracks.length],
              tracks[(currentIndex + 1) % tracks.length].album.cover_small,
              queueType
            )
          );
        }
      }
      //Se estiver a repetir uma música (lvl2) e se dermos skip, o repeat dá downgrade para lvl 1
      if (repeat === 2) {
        dispatch(toogleRepeat(1));
      }
      //Se a música estiver a tocar, a próxima também começará a tocar logo
      if (isPlaying) playSongHandler("play");
    } catch {}
  };
  //Quando uma música termina, a outra começa dependendo do suffle e do repeat
  const songEndHandler = async () => {
    //Repeat na posição 2 - Dar sempre play da mesma música
    if (repeat === 2) {
      let currentIndex = tracks.findIndex(
        (song) => song.id === currentTrack.id
      );
      await dispatch(
        setCurrentTrack(tracks[currentIndex], trackAlbumPic, queueType)
      );
      if (isPlaying) playSongHandler("play");
      //Repeat na posição 1 - Música não nunca pára
    } else if (repeat === 1) {
      let currentIndex = tracks.findIndex(
        (song) => song.id === currentTrack.id
      );
      await dispatch(
        setCurrentTrack(
          tracks[(currentIndex + 1) % tracks.length],
          trackAlbumPic,
          queueType
        )
      );
      if (isPlaying) playSongHandler("play");
    }
    //Música pára quando chegar ao fim da queue
    else {
      let currentIndex = tracks.findIndex(
        (song) => song.id === currentTrack.id
      );
      await dispatch(
        setCurrentTrack(
          tracks[(currentIndex + 1) % tracks.length],
          trackAlbumPic,
          queueType
        )
      );
      if (isPlaying && currentIndex === tracks.length - 1) {
        playSongHandler("pause");
      } else {
        playSongHandler("play");
      }
    }
  };

  const suffleHandler = () => {
    //Se estivermos a ativar o shuffle vai reordenar o array tracks
    if (shuffle === false) {
      try {
        dispatch(shuffleArray(tracks));
      } catch {}

      //Se estivermos a desativar o shuffle vai voltar a implementar o array tracks original
    } else {
      try {
        dispatch(loadQueue(currentQueue, queueType));
      } catch {}
    }

    dispatch(toogleShuffle());
  };
  const repeatHandler = (n) => {
    dispatch(toogleRepeat(n));
  };
  return (
    <>
      <div className="player">
        <audio
          src={currentTrack && currentTrack.preview}
          ref={audioRef}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songEndHandler}
        ></audio>
        <div className="player-playingNow">
          {currentTrack && (
            <>
              <img src={trackAlbumPic} alt="" />
              <div>
                <p className="title">{currentTrack.title}</p>
                <p className="artist">{currentTrack.artist.name}</p>
              </div>
            </>
          )}
        </div>

        <div className="player-content">
          <div className="play-control">
            <ShuffleIcon
              className={`shuffle ${shuffle ? "shuffle-ativado" : ""}`}
              onClick={suffleHandler}
            />
            <span>
              <SkipPreviousIcon
                className="skip-back"
                onClick={() => skipTrackHandler("skip-back")}
              />
              {isPlaying ? (
                <PauseCircleOutlineIcon
                  className="pause"
                  onClick={(e) => playSongHandler("pause")}
                />
              ) : (
                <PlayCircleOutlineIcon
                  className="play"
                  onClick={(e) => playSongHandler("play")}
                />
              )}

              <SkipNextIcon
                className="skip-forward"
                onClick={() => skipTrackHandler("skip-forward")}
              />
            </span>
            {repeat === 0 ? (
              <RepeatIcon className="repeat" onClick={() => repeatHandler(1)} />
            ) : repeat === 1 ? (
              <RepeatIcon
                className="repeat"
                onClick={() => repeatHandler(2)}
                style={{ color: "#47cafb" }}
              />
            ) : repeat === 2 ? (
              <RepeatOneIcon
                className="repeatOne"
                onClick={() => repeatHandler(0)}
                style={{ color: "#47cafb" }}
              />
            ) : (
              ""
            )}
          </div>
          <div className="time-control">
            <p>
              {songInfo.currentTime ? getTime(songInfo.currentTime) : "0:00"}
            </p>
            <input
              type="range"
              min={0.0}
              max={(currentTrack && parseInt(songInfo.duration)) || 0}
              value={(currentTrack && songInfo.currentTime) || 0}
              onChange={dragHandler}
            />
            <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
          </div>
        </div>

        <div className="player-extra-controls">
          <span className="volume">
            <VolumeDown />
            <input
              type="range"
              min={0}
              max={100}
              value={volume * 100 || 0}
              onChange={volumeDragHandler}
            />
            <VolumeUp />
          </span>
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
      </div>
    </>
  );
}

export default Player;
