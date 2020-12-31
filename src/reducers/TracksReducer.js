const initialState = {
  tracks: null,
  isLoading: true,
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return {
        ...state,
        tracks: action.payload.tracks,
        isLoading: false,
      };
    case "LOADING_TRACKS":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default tracksReducer;
