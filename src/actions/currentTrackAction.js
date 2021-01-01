export const Controlo = (func) => (dispatch) => {
  dispatch({
    type: "PLAY_PAUSE",
    payload: {
      play_pause: func,
    },
  });
};
const setCurrentTrack = (track) => (dispatch) => {
  dispatch({
    type: "SET_CURRENT_TRACK",
    payload: {
      currentTrack: track,
    },
  });
};
export default setCurrentTrack;
