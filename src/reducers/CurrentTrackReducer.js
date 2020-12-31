const initialState = {
  currentTrack: null,
  isPlaying: false,
  play_pause: null,
  // isLoading: true,
};

const currentTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return { ...state, play_pause: action.payload.play_pause };
    case "SET_CURRENT_TRACK":
      return { ...state, currentTrack: action.payload.currentTrack };

    // isLoading: false,

    // case "LOADING_TRACKS":
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    case "PLAY_TRACK":
      return { ...state, isPlaying: true };
    case "PAUSE_TRACK":
      return { ...state, isPlaying: false };
    default:
      return { ...state };
  }
};

export default currentTrackReducer;
