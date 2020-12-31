export const Controlo = (func) => (dispatch) => {
  dispatch({
    type: "PLAY_PAUSE",
    payload: {
      play_pause: func,
    },
  });
};
const currentTrack = (track) => (dispatch) => {
  //   dispatch({ type: "LOADING_TRACKS" });

  // const apiData = await axios.get(playlistTracksURL(id));

  dispatch({
    type: "SET_CURRENT_TRACK",
    payload: {
      currentTrack: track,
    },
  });
};
export default currentTrack;
