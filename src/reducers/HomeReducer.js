const stateInicial = {
  topPlaylists: null,
  topArtists: null,
  topAlbums: null,
  topPodcasts: null,
};

const homeReducer = (state = stateInicial, action) => {
  switch (action.type) {
    case "FETCH_HOME_MUSIC":
      return {
        ...state,
        topPlaylists: action.payload.topPlaylists,
        topArtists: action.payload.topArtists,
        topAlbums: action.payload.topAlbums,
        topPodcasts: action.payload.topPodcasts,
      };

    default:
      return { ...state };
  }
};

export default homeReducer;
