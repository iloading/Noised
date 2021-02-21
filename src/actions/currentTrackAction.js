export const Controlo = (func) => (dispatch) => {
  dispatch({
    type: "PLAY_PAUSE",
    payload: {
      play_pause: func,
    },
  });
};

const setCurrentTrack = (track, albumPic, type) => (dispatch) => {
  if (type === "playlist") {
    try {
      dispatch({
        type: "SET_CURRENT_TRACK",
        payload: {
          currentTrack: track,
          album: track.album.cover_small,
        },
      });
    } catch {}
  } else if (type === "album") {
    try {
      dispatch({
        type: "SET_CURRENT_TRACK",
        payload: {
          currentTrack: track,
          album: albumPic,
        },
      });
    } catch {}
  }
};
export default setCurrentTrack;
