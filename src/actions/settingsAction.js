export const setVolume = (volume) => (dispatch) => {
  dispatch({
    type: "ALTERAR_VOLUME",
    payload: {
      volume: volume,
    },
  });
};
export const toogleShuffle = () => (dispatch) => {
  dispatch({
    type: "TOOGLE_SHUFFLE",
  });
};
export const toogleRepeat = (n) => (dispatch) => {
  dispatch({
    type: "TOOGLE_REPEAT",
    payload: { n: n },
  });
};
