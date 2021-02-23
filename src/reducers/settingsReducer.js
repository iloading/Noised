const initialState = {
  volume: 0.5,
  repeat: false,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALTERAR_VOLUME":
      return {
        ...state,
        volume: action.payload.volume,
      };
    case "TOOGLE_REPEAT":
      return {
        ...state,
        repeat: !state.repeat,
      };

    default:
      return { ...state };
  }
};

export default settingsReducer;
