import { combineReducers } from "redux";
import homeReducer from "./HomeReducer";
import playlistReducer from "./PlaylistReducer";

const rootReducers = combineReducers({
  home: homeReducer,
  playlist: playlistReducer,
});

export default rootReducers;
