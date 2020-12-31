import { combineReducers } from "redux";
import homeReducer from "./HomeReducer";
import playlistReducer from "./PlaylistReducer";
import tracksReducer from "./TracksReducer";
import currentTrackReducer from "./CurrentTrackReducer";

const rootReducers = combineReducers({
  home: homeReducer,
  mediaData: playlistReducer,
  tracks: tracksReducer,
  currentTrack: currentTrackReducer,
});

export default rootReducers;
