const initialState = {
  volume: 0.5,
};

const volumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALTERAR_VOLUME":
      return {
        ...state,
        volume: action.payload.volume,
      };

    default:
      return { ...state };
  }
};

export default volumeReducer;
