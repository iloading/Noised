const initialState = {
  data: null,
  position: null,
  isLoading: true,
  type: null,
};

const mediaDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload.data,
        position: { x: action.payload.x, y: action.payload.y },
        isLoading: false,
        type: action.payload.type,
      };
    case "LOADING_PREVIEW":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default mediaDataReducer;
