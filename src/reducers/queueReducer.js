const initialState = {
  tracks: null,
  isLoading: true,
  currentQueue: null,
  queueType: null,
};

const queueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return {
        ...state,
        queueType: action.payload.queueType,
        currentQueue: action.payload.currentQueue,
        tracks: action.payload.tracks,
        isLoading: false,
      };
    case "LOADING_TRACKS":
      return {
        ...state,
        isLoading: true,
      };
    case "SHUFFLE_TRACKS":
      return {
        ...state,
        tracks: action.payload.tracks,
      };

    default:
      return { ...state };
  }
};

export default queueReducer;
