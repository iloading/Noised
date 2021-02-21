const initialState = {
  trackAlbumPic: null,
  currentTrack: null,
  isPlaying: false,
  play_pause: null,

  // currentTime: 0,
  // duration: 0,
  // isLoading: true,
};

const currentTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return { ...state, play_pause: action.payload.play_pause };
    // case "SET_CURRENT_ALBUM":
    //   return {
    //     ...state,
    //     currentTrack: action.payload.currentTrack,
    //     trackAlbum: action.payload.album,
    //   };
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrack: action.payload.currentTrack,
        trackAlbumPic: action.payload.album,
      };
    case "PLAY_TRACK":
      return { ...state, isPlaying: true };
    case "PAUSE_TRACK":
      return { ...state, isPlaying: false };

    default:
      return { ...state };
  }
};

export default currentTrackReducer;
