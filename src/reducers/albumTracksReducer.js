const initialState = {
  data: null,
  isLoading: true,
};

const albumTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default albumTracksReducer;
