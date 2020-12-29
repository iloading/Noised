const initialState = { data: null, position: null };

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PLAYLIST":
      return {
        ...state,
        data: action.payload.playlist,
        position: { x: action.payload.x, y: action.payload.y },
      };

    default:
      return { ...state };
  }
};

export default playlistReducer;
