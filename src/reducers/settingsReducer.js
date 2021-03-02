const initialState = {
  volume: 0.5,
  shuffle: false,
  repeat: 0,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALTERAR_VOLUME":
      return {
        ...state,
        volume: action.payload.volume,
      };
    case "TOOGLE_SHUFFLE":
      return {
        ...state,
        shuffle: !state.shuffle,
      };
    case "TOOGLE_REPEAT":
      return {
        ...state,
        repeat: action.payload.n,
      };

    default:
      return { ...state };
  }
};

export default settingsReducer;
