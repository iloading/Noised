export const setVolume = (volume) => (dispatch) => {
  dispatch({
    type: "ALTERAR_VOLUME",
    payload: {
      volume: volume,
    },
  });
};
export const toogleRepeat = () => (dispatch) => {
  dispatch({
    type: "TOOGLE_REPEAT",
  });
};
