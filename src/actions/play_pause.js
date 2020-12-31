export const play = () => (dispatch) => {
  dispatch({ type: "PLAY_TRACK" });
};
export const pause = () => (dispatch) => {
  dispatch({ type: "PAUSE_TRACK" });
};
