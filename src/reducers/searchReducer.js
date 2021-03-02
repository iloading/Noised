const initialState = {
  tracks: null,
  albums: null,
  artists: null,
  isLoading: true,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_RESULTS":
      return {
        ...state,
        isLoading: true,
      };
    case "SAVE_DATA":
      return {
        ...state,
        tracks: action.payload.tracks,
        albums: action.payload.albums,
        artists: action.payload.artists,
        playlists: action.payload.playlists,
        term: action.payload.term,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

export default searchReducer;
