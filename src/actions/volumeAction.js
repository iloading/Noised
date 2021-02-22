export const setVolume = (volume) => (dispatch) => {
  dispatch({
    type: "ALTERAR_VOLUME",
    payload: {
      volume: volume,
    },
  });
};
